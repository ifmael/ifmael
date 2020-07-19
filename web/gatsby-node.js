const path = require('path')
const pages = require('./src/config/pages-node');
const { create } = require('domain');


const setNumPage = (numberOfPage) =>{
  return numberOfPage <= 0 ? '' : numberOfPage;
}

const pagesListBlogPost = ( component, createPage, locale, nPages, postPerPage) =>{
  Array.from({ length: nPages}).forEach( ( _, nPage) =>{
    const page = {
      path: nPage === 0 ? `/blog/${locale}` : `/blog/${locale}/${nPage}`,
      component: component,
      context: {
        limit: postPerPage,
        locale: locale,
        skip: nPage * postPerPage,
        pageNumber: nPage,
        previousPage: nPage === 0 ? undefined : `/blog/${locale}/${setNumPage(nPage - 1)}`,
        nextPage: nPages > nPage + 1 ? `/blog/${locale}/${ nPage + 1}` : undefined
      }
    };

    createPage(page);
  });
}


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
    const postEs = [];
    const postEn = [];

    // Post for each langugue
    posts.forEach(post => {
      const { languages = [] } = post.node;
      languages.includes('es') && postEs.push(post);
      languages.includes('en') && postEn.push(post);
    });

    // Configuration for each list of post page
    const postPerPage = 5;
    const numPagesEs = Math.ceil(postEs.length / postPerPage);
    const numPagesEn = Math.ceil(postEn.length / postPerPage);
    const blogPostsPath = path.resolve('./src/templates/blogPosts.js');

    pagesListBlogPost(blogPostsPath, createPage, 'es', numPagesEs, postPerPage )
    pagesListBlogPost(blogPostsPath, createPage, 'en', numPagesEn, postPerPage )

    // list of blogpost

    const blogPostPath = path.resolve('./src/templates/blogPost.js');
    posts
      .map(post => {
        const {
          id,
          slug = {},
          languages = []
        } = post.node;
        languages
          .forEach(locale => {
            const path = `/blog/${locale}/${slug[locale].current}`;
            createPage({
              path,
              component: blogPostPath,
              context: {
                id,
                locale: locale
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
exports.onCreatePage = ({
  page,
  actions
}) => {
  const {
    createPage,
    deletePage
  } = actions;
  const {
    internalComponentName
  } = page

  const pageConfig = pages.find(p => p.component === internalComponentName)

  if (pageConfig) {
    const i18Config = (locale, path) => ({
      context: {
        locale
      },
      path
    })

    const i18En = {
      ...page,
      ...i18Config('en', pageConfig.en)
    }
    const i18Es = {
      ...page,
      ...i18Config('es', pageConfig.es)
    }

    deletePage(page);
    createPage(i18En)
    createPage(i18Es)
  } else {
    deletePage(page)
  }

}


/* exports.onPostBuild = () => {
  fs.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  )
} */