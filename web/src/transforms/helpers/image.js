module.exports = transformImage = (image) => {
  const {alt, asset, caption} = image;
  return {
    alt,
    caption,
    url: asset._id
  }
}
