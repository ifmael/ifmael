import React from 'react'
import LocaleContext from './locale-context'
import { useTranslation } from "react-i18next"

const LocaleProvider = ({ children, locale}) =>{
  const { i18n } = useTranslation()

  i18n.language !== locale && i18n.changeLanguage(locale);

  return <LocaleContext.Provider value={locale}>{ children }</LocaleContext.Provider>
}

export default LocaleProvider