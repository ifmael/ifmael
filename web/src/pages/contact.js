import React from "react"
import Contact from "../components/main/Contact"
import Layout from "../components/common/layout/Main";
import SEO from "../components/seo"
import "../utils/i18n"

const ContactPage = ( { pageContext: { locale } } ) => (
  <Layout locale={ locale }>
    <SEO title="Home" />
    <Contact/>
  </Layout>
)

export default ContactPage
