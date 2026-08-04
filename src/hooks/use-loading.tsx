'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Recursos que o overlay espera antes de sair. */
const SIGNALS = ['fonts', 'hero'] as const;

export type LoadingSignal = (typeof SIGNALS)[number];

/** Tempo mínimo no ar — evita o overlay apenas piscar em conexão rápida. */
const MIN_VISIBLE_MS = 600;

/**
 * Teto absoluto. Não é opcional: se o WebGL falhar de um jeito não previsto ou
 * `fonts.ready` nunca resolver, sem isso o site fica coberto e sem scroll para
 * sempre — justamente nos aparelhos fracos que motivaram o overlay.
 */
const FAILSAFE_MS = 6000;

const LOADING_CLASS = 'is-loading';

type LoadingContextValue = {
  isLoading: boolean;
  markReady: (signal: LoadingSignal) => void;
};

const LoadingContext = createContext<LoadingContextValue | null>(null);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  // Estado inicial determinístico ("carregando"), igual ao HTML do servidor.
  const [isLoading, setIsLoading] = useState(true);
  const pendingRef = useRef<Set<LoadingSignal>>(new Set(SIGNALS));
  const releaseTimeoutRef = useRef<number | null>(null);
  const failsafeRef = useRef<number | null>(null);
  const releasedRef = useRef(false);

  const release = useCallback(() => {
    if (releasedRef.current) return;
    releasedRef.current = true;

    if (failsafeRef.current !== null) window.clearTimeout(failsafeRef.current);

    document.documentElement.classList.remove(LOADING_CLASS);
    window.scrollTo(0, 0);

    // Os triggers foram criados com o <html> em `overflow: hidden`. Destravar o
    // scroll e voltar ao topo muda as medições — sem o refresh, os start/end
    // ficam calculados sobre um layout que não existe mais.
    ScrollTrigger.refresh();

    setIsLoading(false);
  }, []);

  /** Cumpre o piso de tempo antes de liberar. */
  const scheduleRelease = useCallback(() => {
    if (releasedRef.current || releaseTimeoutRef.current !== null) return;

    // `performance.now()` conta desde a navegação, que é praticamente quando o
    // overlay apareceu (ele vem no HTML do servidor). Medir daqui, e não do
    // mount do provider, é o que corresponde ao tempo que o usuário de fato
    // olhou para a tela de carregamento — e não depende da ordem dos efeitos.
    const wait = Math.max(0, MIN_VISIBLE_MS - performance.now());

    releaseTimeoutRef.current = window.setTimeout(() => {
      releaseTimeoutRef.current = null;
      release();
    }, wait);
  }, [release]);

  const markReady = useCallback(
    (signal: LoadingSignal) => {
      pendingRef.current.delete(signal);
      if (pendingRef.current.size === 0) scheduleRelease();
    },
    [scheduleRelease]
  );

  useEffect(() => {
    // Impede o navegador de restaurar o scroll por cima do nosso scrollTo(0, 0).
    const previousRestoration = history.scrollRestoration;
    history.scrollRestoration = 'manual';

    document.fonts.ready.then(() => markReady('fonts'));

    failsafeRef.current = window.setTimeout(() => {
      failsafeRef.current = null;
      pendingRef.current.clear();
      release();
    }, FAILSAFE_MS);

    return () => {
      history.scrollRestoration = previousRestoration;
      if (releaseTimeoutRef.current !== null) window.clearTimeout(releaseTimeoutRef.current);
      if (failsafeRef.current !== null) window.clearTimeout(failsafeRef.current);
    };
  }, [markReady, release]);

  return <LoadingContext.Provider value={{ isLoading, markReady }}>{children}</LoadingContext.Provider>;
}

export function useLoading() {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider.');
  }

  return context;
}
