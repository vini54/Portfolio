'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { DEFAULT_LANGUAGE, i18n, LANGUAGES, type Language } from '@/lib/i18n';

export type { Language };

const STORAGE_KEY = 'language';

type LanguageContextValue = {
  currentLanguage: Language;
  changeLanguage: (next: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const isLanguage = (value: string | null): value is Language => LANGUAGES.includes(value as Language);

/**
 * pt-BR para quem tem português entre os idiomas do navegador, en para todo o resto.
 * Só roda no cliente — no servidor não existe `navigator`.
 */
function detectLanguage(): Language {
  if (typeof navigator === 'undefined') return DEFAULT_LANGUAGE;

  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];

  return preferred.some((lang) => lang?.toLowerCase().startsWith('pt')) ? 'pt-BR' : 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const initial = isLanguage(stored) ? stored : detectLanguage();

    if (initial !== DEFAULT_LANGUAGE) {
      i18n.changeLanguage(initial);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentLanguage(initial);
    }

    document.documentElement.lang = initial;
  }, []);

  const changeLanguage = (next: Language) => {
    i18n.changeLanguage(next);
    setCurrentLanguage(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider.');
  }

  return context;
}
