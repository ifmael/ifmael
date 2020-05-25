const localeSchema = (locale = 'es') => {
  const schemaWithLocale = {}
  const esOrEn = (spanishText, englishText) => locale === 'es' ? spanishText : englishText
  
  const schema = {
    landingBio: {
      name: esOrEn('Ismael Rodriguez', 'Isma')
    },
    menu: {
      home: esOrEn('Inicio', 'Home'),
      blog: 'Blog',
      github: 'Github',
      aboutMe: esOrEn('Sobre mí', 'About me'),
      contact: esOrEn('Contacto', 'Contact')
    }
  }

  schemaWithLocale[locale] = schema
  return schemaWithLocale
}

export default localeSchema