import React from "react"
import LocaleProvider from "./locale-provider"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const GatsbyLink = styled.a`
  margin-left: 5px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const Layout = ({ children, locale }) => {
  return (
    <LocaleProvider locale={ locale }>
      <Header locale={locale}/>
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
