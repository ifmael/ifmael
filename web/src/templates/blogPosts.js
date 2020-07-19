import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/common/layout/Main";
import NavigationPages from '../components/common/NavigationPages';
import PostBoxList from '../components/common/PostBoxList';
import { localize } from "../utils/localize"

const BlogPostTemplate = ( { pageContext, data, errrors } ) => {
  const { allSanityPost: { edges: posts}} = data;
  const { locale, previousPage, nextPage } = pageContext;
  const urlToAnotherLocale = locale === 'es' ? '/blog/en': '/blog/es';
  const postWithoutNodeProperty = posts.map( postNode => {
    const {node: post} = postNode;
    return post;
  })
  const postLocalised = localize(postWithoutNodeProperty, locale);
  const postLocalisedWithSlug = postLocalised.map( post =>{
    return { ...post, slug: `/blog/${locale}/${post.slug.current}`}
  });

  return (
    <Layout 
      locale = { locale }
      dinamicUrlMenu = { urlToAnotherLocale }
    >
      <PostBoxList 
        posts = { postLocalisedWithSlug }
      />
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
          createdOn: _createdAt
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