'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';

type Theme = 'light' | 'dark';

// Precisa bater com --theme-transition-duration em globals.css.
const THEME_TRANSITION_MS = 320;

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const transitionTimeout = useRef<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    const initial = stored ?? 'dark';
    setTheme(initial);
    // Sem `.theme-transition` aqui: a sincronização inicial deve ser instantânea.
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  useEffect(() => {
    return () => {
      if (transitionTimeout.current !== null) window.clearTimeout(transitionTimeout.current);
    };
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;

    // Liga as transições de cor só durante a troca — ver globals.css.
    root.classList.add('theme-transition');
    if (transitionTimeout.current !== null) window.clearTimeout(transitionTimeout.current);
    transitionTimeout.current = window.setTimeout(() => {
      root.classList.remove('theme-transition');
      transitionTimeout.current = null;
    }, THEME_TRANSITION_MS);

    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      root.classList.toggle('dark', next === 'dark');
      localStorage.setItem('theme', next);
      return next;
    });
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider.');
  }

  return context;
}
