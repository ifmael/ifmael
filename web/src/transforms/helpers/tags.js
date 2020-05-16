module.exports = transformTags = (tags) => {
  return tags.map(tag =>{
    return {
      slug: tag.slug.current,
      title: tag.title
    }
  })
}