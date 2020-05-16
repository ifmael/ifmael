import languages from '../config/languages'

export default {
  name: 'localeString',
  title: 'Locale String',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true}
    }
  ],
  fields: languages.map(lang => (
    {
      title: lang.title,
      name: lang.id,
      type: 'string',
      fieldset: lang.isDefault ? null : 'translations'
    }
  ))
}