import languages from '../config/languages'

export default {
  name: 'localeSlug',
  type: 'object',
  fields: languages.map(lang => (
    {
      title: lang.title,
      name: lang.id,
      type: 'slug',
      options: {
        source: doc => `${doc.title[lang.id]}`,
        maxLength: 100
      }
    }
  ))
}