import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/common/layout/Main";
import NavigationPages from '../components/common/NavigationPages';
import localize from "../utils/localize"

const BlogPostTemplate = ( { pageContext, data, errrors } ) => {
  const { allSanityPost: { edges: posts}} = data;
  const { locale, previousPage, nextPage } = pageContext;
  const urlToAnotherLocale = locale === 'es' ? '/blog/en': '/blog/es';

/*   const postLocalised = localize(post, locale) */
  debugger
  return (
    <Layout 
      locale = { locale }
      dinamicUrlMenu = { urlToAnotherLocale }
    >
      {
        posts.map((postNode, index) =>{
          const {node: post} = postNode;

          return (<div key={ index }>
                  <p>{ post._createdAt} </p>
                  <p>{ post.title[locale]} </p>
                  <p>{ post.description[locale]} </p>
                  <p>{ post._createdAt} </p>
                  <hr />
                </div>)
        })
      }
      <NavigationPages
        previousPage = { previousPage }
        nextPage = { nextPage}
      />
    </Layout>)
}


export const query = graphql`
  query listOfPost($skip: Int!, $limit: Int!, $locale: String!) {
    allSanityPost(
      limit: $limit,
      skip: $skip,
      sort: { fields: _createdAt, order: DESC }
      filter: { languages: {eq: $locale} }
    ) {
      edges {
        node {
          id
          _createdAt
          title {
            en
            es
          }
          description {
            en
            es
          }
          slug {
            es {
              current
            }
            en{
              current
            }
          }
        }
      }
    }
  }
`


export default BlogPostTemplate