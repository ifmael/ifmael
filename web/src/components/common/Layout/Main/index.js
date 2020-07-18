import React from "react";
import LocaleProvider from '../../../utils/LocaleProvider';
import Header from "../../Header"
import Content from '../../../common/Content';
import GatsbyLink from '../../../common/GatsbyLink';
import Footer from '../../../common/Footer';
import "../layout.css"

const Layout = ({ children, dinamicUrlMenu, locale }) => {
  return (
    <LocaleProvider locale={ locale }>
      <Header dinamicUrlMenu= { dinamicUrlMenu } />
      <Content>
        <main>{children}</main>
        <Footer>
          <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          </p>
          <GatsbyLink href="https://www.gatsbyjs.org">Gatsby</GatsbyLink>
        </Footer>
      </Content>
    </LocaleProvider>
  )
}

export default Layout
