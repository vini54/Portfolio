import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ptBR } from './locales/pt-BR';
import { en } from './locales/en';

export const LANGUAGES = ['pt-BR', 'en'] as const;

export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = 'pt-BR';

export const i18n = createInstance();

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      'pt-BR': { translation: ptBR },
      en: { translation: en }
    },
    // `lng` fixo de propósito: o HTML do servidor sai sempre em pt-BR e a troca
    // para en acontece no efeito do LanguageProvider. Detectar o idioma aqui
    // faria o primeiro render do cliente divergir do servidor.
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: LANGUAGES,
    interpolation: { escapeValue: false }, // o React já escapa
    react: { useSuspense: false } // não há Suspense boundary na árvore
  });
}
