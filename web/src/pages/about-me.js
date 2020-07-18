import React from "react"
import AboutMe from '../components/main/AboutMe'
import Layout from "../components/common/layout/Main";
import SEO from "../components/seo"
import "../utils/i18n"

const AboutMePage = ( { pageContext: { locale } } ) => (
  <Layout locale={ locale }>
    <SEO title="Home" />
    <AboutMe/>
  </Layout>
)

export default AboutMePage
