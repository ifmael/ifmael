export default {
  name: 'settings',
  type: 'document',
  title: 'Site Settings',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString'
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.',
      type: 'localeText'
    },
    {
      name: 'keywords',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      type: 'array',
      of: [
        {type: 'string'}
      ],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      type: 'reference',
      to: [
        {type: 'author'
      }]
    }
    // TODO: SEO
  ]
}
