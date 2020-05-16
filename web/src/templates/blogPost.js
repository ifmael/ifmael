import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"


const BlogPostTemplate = ( { pageContext, data } ) => {
  const { post} = data
  const { language } = pageContext
  return (<Layout>
    {
      post.title && post.title[language] &&
        <p> {post.title[language]}</p>
    }
  </Layout>)
}


export const query = graphql`
  query BlogPostTemplateQuery($id: String!, $es: Boolean!, $en: Boolean!) {
    post: sanityPost(id: {eq: $id}){
      title {
        en @include(if: $en)
        es @include(if: $es)
      }
      tags {
        title {
          en @include(if: $en)
          es @include(if: $es)
        }
      }
      category {
        title {
          en @include(if: $en)
          es @include(if: $es)
        }
        slug {
          current
        }
      }
      description {
        en @include(if: $en)
        es @include(if: $es)
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
`


export default BlogPostTemplate