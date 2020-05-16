const path = require('path')

async function createBlogPostPages(graphql, actions) {
  try {
    const {
      createPage
    } = actions;

    const postPage = `
      {
        allSanityPost {
          edges {
            node {
              id
              slug {
                en {
                  current
                }
                es {
                  current
                }
              }
              languages
            }
          }
        }
      }
    `;

    const result = await graphql(postPage)
    if (result.errors) {
      console.log("Error retrieving data from graphql api", result.errors);
      throw result.errors;
    }

    // TODO: Change for conditional chaining
    const posts = (result.data.allSanityPost || {}).edges || [];
    const blogPostPath = path.resolve('./src/templates/blogPost.js');

    posts
      .map( post => {
        const {id, slug = {}, languages = []} = post.node;
        languages
                .forEach(language =>{
                  const path = `/${language}/blog/${slug[language].current}`;
                
                  createPage({
                    path,
                    component: blogPostPath,
                    context: { 
                      id,
                      en: language === 'en' ? true : false,
                      es: language === 'es' ? true : false,
                      language: language
                    }
                  })
                })

        
        

      })


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
