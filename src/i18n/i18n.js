import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
// English
import en from './en/en.json';
// Spanish
import es from './es/es.json';

export const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => callback(RNLocalize.getLocales()[0].languageCode),
  init: () => {},
  cacheUserLanguage: () => {},
};
i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    compatibilityJSON: 'v3',
    resources,
    react: {
      useSuspense: false,
    },
    ns: ['translation'],
  });

export default i18next;
