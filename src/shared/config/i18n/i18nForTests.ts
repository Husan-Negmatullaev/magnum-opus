import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'en',

    // have a common namespace used around the full app
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    resources: { ru: { translations: {} } },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
