import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/common/layout/Main";
import { localizeWithType } from "../utils/localize";

const BlogPostTemplate = ( { pageContext, data, errrors } ) => {
  const { post} = data;
  const { locale } = pageContext;
  const postLocalised = localizeWithType(post, locale);
  const differentLocale = locale === 'es' ? 'en' : 'es';
  const rootDifferentLocale = `/blog/${differentLocale}`
  debugger;
  const slugDifferentLocale = post.slug[differentLocale]
                                                      ? `${rootDifferentLocale}/${post.slug[differentLocale].current}`
                                                      : rootDifferentLocale ;
  return (
    <Layout
      locale = { locale }
      dinamicUrlMenu = { slugDifferentLocale }
    >
      {
        postLocalised && postLocalised.title &&
          <p> {postLocalised.title}</p>
      }
    </Layout>
  );
}


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
      slug {
        es {
          current
        }
        en {
          current
        }
      }
    }
  }
`


export default BlogPostTemplate