import React from "react"

import LandingBio from "../../components/landing-bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "../../utils/i18n"

const IndexPageEn = () =>{
  return (
    <Layout>
      <SEO title="Home"/>
      <LandingBio language="en"/>
    </Layout>
  )
} 
export default IndexPageEn
