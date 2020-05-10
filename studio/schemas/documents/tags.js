export default {
  name: 'tags',
  type: 'document',
  title: 'Tags',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Slug for the tag',
      options: {
        source: 'title',
        maxLength: 100
      }
    }
  ]
}
