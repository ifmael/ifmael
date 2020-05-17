import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import locale from "../locales/locales"

i18n
  .use(initReactI18next)
  .init({
    resources: locale,
    fallbackLng: 'es',
    debug: true,

    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;