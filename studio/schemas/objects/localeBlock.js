import languages from '../config/languages'

export default {
  name: 'localeBlock',
  title: 'Locale Block',
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
      type: 'array',
      of: [{type: 'block'}],
      fieldset: lang.isDefault ? null : 'translations'
    }
  ))
}