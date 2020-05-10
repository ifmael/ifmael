async function createBlogPostPages(graphql, actions) {
  try {
    const {
      createPage
    } = actions;

    const postQuery = `{
      allSanityPost {
        nodes {
          _id
          _createdAt
          _rawBody
          title {
            en
            es
          }
          tags {
            title {
              en
              es
            }
            slug {
              current
            }
          }
          slug {
            current
          }
          category {
            title {
              en
              es
            }
            slug {
              current
            }
          }
          description {
            en
            es
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
    }`;

    const result = await graphql(postQuery)
    if (result.errors) {
      console.log("Error retrieving data from graphql api", result.errors);
      throw result.errors;
    }

  } catch (error) {
    console.log(error.message);
  }
}



exports.createPages = async ({
  graphql,
  actions
}) => {
  await createBlogPostPages(graphql, actions)
}