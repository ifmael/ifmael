export default {
  name: 'serie',
  title: 'Serie',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'localeString',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeText'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage'
    },
    {
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of:[
        {
          type: 'reference',
          to: { type: 'post'}
        }
      ]
    }
  ]
}
