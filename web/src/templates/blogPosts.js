import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import localize from "../utils/localize"

const BlogPostTemplate = ( { pageContext,/*  data, */ errrors } ) => {
/*   const { post} = data */
  const { locale } = pageContext
/*   const postLocalised = localize(post, locale) */
  return (
    <Layout>
      <h1> lista de blogs</h1>
    </Layout>)
}

/* 
export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}){
      title {
        en
        es
        _type
      }
      tags {
        title {
          en
          es
          _type
        }
      }
      category {
        title {
          en
          es
          _type
        }
        slug {
          current
        }
      }
      description {
        en
        es
        _type
      }
      mainImage {
        caption
        alt
        asset {
          _id
        }
      }
    }
  }
` */


export default BlogPostTemplate