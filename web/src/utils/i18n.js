import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import localeSchema from '../locales/localeSchema'

i18n
  .use(initReactI18next)
  .init({
    resources: { ...localeSchema(), ...localeSchema('en') },
    fallbackLng: 'es',
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;