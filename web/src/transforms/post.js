const tranformBody = require('./helpers/body')
const transformCategory = require('./helpers/category');
const transformDate = require('./helpers/date')
const transformDescription = require('./helpers/description');
const transformImage = require('./helpers/image')
const transformTags = require('./helpers/tags')
const transformTitle = require('./helpers/title')

module.exports = transformPost = (posts) => {
  return posts.map(post => {
    const { _createdAt, _rawBody ,category, description, mainImage, slug, tags, title } = posts
    return {
      body: tranformBody(_rawBody),
      category: transformCategory(category),
      createdAt: transformDate(_createdAt),
      description: transformDescription(description),
      mainImage: transformImage(mainImage),
      slug: transformSlug(slug),
      tags: transformTags(tags),
      title: transformTitle(title)
    }
  })
}