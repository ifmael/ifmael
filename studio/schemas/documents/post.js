import  languages from '../config/languages';

export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
      type: 'localeString'
    },
    {
      // TODO: Maybe it is necessary to make a custom type.
      name: 'description',
      title: 'Description',
      description: 'Post Summary. A little introduction',
      type: 'localeText'
    },
    {
      name: 'languages',
      title: 'Available languages',
      description: 'In which langugues will be availaible the post',
      type:'array',
      of: [
        { type: 'string' }
      ],
      options: {
        list: languages
                .map(language => {
                  return {
                    value: language.id,
                    title: language.title
                  }
                })
      }
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'Slug for the blog post',
      type: 'localeSlug'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}]
    },
    {
      name: 'serie',
      title: 'Serie',
      type: 'reference',
      to:[{
        type: 'serie'
      }]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeBlock'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'mainImage'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'tags'}
        }
      ]
    }
    
    // TODO: structured-data google, comments
  ]
}