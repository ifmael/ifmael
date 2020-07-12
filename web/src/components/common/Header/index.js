import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"
import Menu from "../Menu"

const Content = styled.div`
  max-width: 860px;
  padding: 2rem 1.0875rem;
  font-size: 1.2rem;
  margin: 0 auto;
  text-align: right;
`

const SiteHeader = styled.div`
  background: transparent;
${'' /*   display: flex;
  align-content: center;
  justify-content: center; */}
`

const Header = () => (
  <SiteHeader>
    <Content>
      <Menu />
    </Content>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
