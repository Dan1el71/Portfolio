import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en/translation.json'
import es from './es/translation.json'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
    detection: {
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage', 'cookie'],
      convertDetectedLanguage: (lng) => {
        if (lng === 'es-ES') return 'es'
        if (lng === 'en-US') return 'en'
        return 'es'
      },
      order: ['htmlTag', 'navigator', 'localStorage', 'cookie'],
    },
  })

export default i18n
