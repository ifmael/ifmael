const getText = (language) =>{
  return {
    text: language[0].children[0].text
  }
}


module.exports = transformBody = (body) => {
  const {en, es} = body
  return{
    en: getText(en),
    es: getText(es)
  }
}