import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { languages } from "prismjs"
import './landing-bio.css'
import 'animate.css'

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
${'' /* a */}
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const LandingBio = () => {
  const { t } = useTranslation();


  return (
     <OuterContainer>
      <Container>
        <NameHeader> 
          { t('landingBio:name') }
        </NameHeader>
        <Description> Esto es una descripcion Esto es una descripcionEsto es una descripcionEsto es una descripcionEsto es una descripcionEsto es una descripcionEsto es una descripcionEsto es una descripcionEsto es una descripcion</Description>
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
