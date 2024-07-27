import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Load translations from a backend (public/locales)
  .use(initReactI18next) // Initialize react-i18next
  .init({
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already safely escapes values
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to the translation files
    },
  });

export default i18n;
