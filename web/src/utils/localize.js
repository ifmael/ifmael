const localize = (value, language) => {
  if (Array.isArray(value)) {
    return value.map(v => localize(v, language))
  } else if (typeof value == 'object') {
    if (/^locale[A-Z]/.test(value._type)) {
      return value[language]
    }
    
    return Object.keys(value).reduce((result, key) => {
      result[key] = localize(value[key], language)
      return result
    }, {})
  }
  return value
}

export default localize;