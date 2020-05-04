export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'localeString'
    },
    {
      name: 'bio',
      title: 'Biography',
      description: 'A little description.',
      type: 'localeText'
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'Slug for the person',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      }
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',

    }
    // TODO: social-media
  ]
}
