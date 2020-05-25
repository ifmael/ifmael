import React, { useContext } from 'react'
import pages from '../config/pages'
import LocaleContext from './locale-context'
import { useTranslation } from "react-i18next"
import MenuItem from "./menu-item"

const Menu = () => {
  const locale = useContext(LocaleContext)
  const { t } = useTranslation();
  const currentPage = pages[0]
  return (
    <nav aria-labelledby='primary-navigation'>
      <ul>
        {
          pages && pages.length > 0 && pages.map( ( page , index ) => (
            <MenuItem
              key={ index }
              name={ t(`menu:${page.name}`) }
              url={ page[locale] }
              internal={ page.internal}
              position={ index }
            />
          ))
        }
        <MenuItem 
          name={ locale === 'es' ? 'en' : 'es'}
          url={currentPage[(locale === 'es' ? 'en' : 'es')]}
          internal={ true }
        />
      </ul>
    </nav>
  )
}
// t(`menu:${page.name}`)

export default Menu