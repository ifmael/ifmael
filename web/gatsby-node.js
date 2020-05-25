const path = require('path')
const pages = require('./src/config/pages-node')

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
                locale: language
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
exports.onCreatePage = ({ page, actions }) =>{
  const { createPage, deletePage } = actions;
  const { internalComponentName } = page

  const pageConfig = pages.find(p => p.component === internalComponentName)

  if( pageConfig ){
    const i18Config = (locale, path) => ({
      context:{ locale },
      path
    })

    const i18En = { ...page, ...i18Config('en', pageConfig.en) }
    const i18Es = { ...page, ...i18Config('es', pageConfig.es) }
  
    deletePage(page);
    createPage(i18En)
    createPage(i18Es)
  } else{
    deletePage(page)
  } 

}


/* exports.onPostBuild = () => {
  fs.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  )
} */