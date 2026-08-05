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
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: LANGUAGES,
    interpolation: { escapeValue: false }, // o React já escapa
    react: { useSuspense: false } // não há Suspense boundary na árvore
  });
}
