import React from "react"
import LandingBio from "../components/main/LandingBio"
import Layout from "../components/common/layout/Main";
import SEO from "../components/seo"
import "../utils/i18n"

const IndexPage = ( { pageContext: { locale } } ) => (
  <Layout locale={ locale }>
    <SEO title="Home" />
    <LandingBio />
  </Layout>
)

export default IndexPage
