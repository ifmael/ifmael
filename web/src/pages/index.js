import React from "react"
import { Link } from "gatsby"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingBio />
  </Layout>
)

export default IndexPage
