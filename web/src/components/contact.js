import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

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

const Contact = () => {
  const { t } = useTranslation()

  return (
    <OuterContainer>
      <Container>
        <NameHeader> { t('landingBio:contact') } </NameHeader>
        <Description> this is a description</Description>
      </Container>
    </OuterContainer>
  )
}

export default Contact
