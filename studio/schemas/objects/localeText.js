import languages from '../config/languages'

export default {
  name: 'localeText',
  title: 'Locale Text',
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
      type: 'text',
      fieldset: lang.isDefault ? null : 'translations'
    }
  ))
}