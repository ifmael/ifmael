import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { languages } from "prismjs"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const LandingBio = ({language}) => {
  console.log(language)
  const { t, i18n } = useTranslation()
  i18n.changeLanguage(language);
  /*
              <NameHeader>{data.site.siteMetadata.title}</NameHeader>
        <Description>{data.site.siteMetadata.subtitle}</Description>*/
  return (
    <OuterContainer>
      <Container>
        <NameHeader>{ t('LandingBio:name') }</NameHeader>
      </Container>
    </OuterContainer>
  )
}

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
