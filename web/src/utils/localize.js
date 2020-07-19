const localize = (value, language) => {
  if (Array.isArray(value)) {
    return value.map(v => localize(v, language))
  } else if (typeof value == 'object') {
    debugger
    if (value[language]) {
      return value[language]
    }
    
    return Object.keys(value).reduce((result, key) => {
      result[key] = localize(value[key], language)
      return result
    }, {})
  }
  return value
}

const localizeWithType = (value, language) => {
  if (Array.isArray(value)) {
    return value.map(v => localizeWithType(v, language))
  } else if (typeof value == 'object') {
    if(!value) return;
    if (value && /^locale[A-Z]/.test(value._type)) {
      return value[language]
    }
    
    return Object.keys(value).reduce((result, key) => {
      result[key] = localizeWithType(value[key], language)
      return result
    }, {})
  }
  return value
}

export { localize, localizeWithType };

