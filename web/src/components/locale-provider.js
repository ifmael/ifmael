import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next"

const LocaleProvider = ({children, locale}) => {
  const { i18n } = useTranslation();

  useEffect( () => {
    i18n.language !== locale && i18n.changeLanguage(locale);
  }, [locale]);
  return ( children )
}

export default LocaleProvider