import React from "react"
import Contact from "../components/contact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../utils/i18n"

const ContactPage = ( { pageContext: { locale } } ) => (
  <Layout locale={ locale }>
    <SEO title="Home" />
    <Contact locale= { locale }/>
  </Layout>
)

export default ContactPage
