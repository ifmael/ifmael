import React from "react"
import Container from '../../common/Container';
import Description from '../../common/Description'
import NameHeader from '../../common/NameHeader';
import OuterContainer from '../../common/OuterContainer';
import { useTranslation } from "react-i18next"

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <OuterContainer>
      <Container>
        <NameHeader> { t('landingBio:aboutMe') } </NameHeader>
        <Description> A machine</Description>
      </Container>
    </OuterContainer>
  )
}

export default AboutMe
