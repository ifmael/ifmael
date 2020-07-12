import React from "react"
import Container from '../../common/Container';
import Description from '../../common/Description'
import NameHeader from '../../common/NameHeader';
import OuterContainer from '../../common/OuterContainer';
import { useTranslation } from "react-i18next"

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
