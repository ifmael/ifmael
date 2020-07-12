import React from 'react'
import pages from '../../../config/pages';
import { useTranslation } from "react-i18next"
import MenuItem from "../MenuItem"

const Menu = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const slug = window.location.pathname;
  const slugWithouttrailing = slug.charAt(slug.length - 1) === '/' && slug.length > 1 ? slug.slice(0,-1) : slug
  const page = pages.find(page => page['es'] === slugWithouttrailing || page['en'] === slugWithouttrailing )

  return (
    <nav aria-labelledby='primary-navigation'>
      <ul>
        {
          pages && pages.length > 0 && pages.map( ( page , index ) => (
            <MenuItem
              key={ index }
              name={ t(`menu:${page.name}`) }
              url={ page[language] }
              internal={ page.internal}
              position={ index }
            />
          ))
        }
        <MenuItem 
          name={ language === 'es' ? 'en' : 'es'}
          url={page[(language === 'es' ? 'en' : 'es')]}
          internal={ true }
        />
      </ul>
    </nav>
  )
}

export default Menu