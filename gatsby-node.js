const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      site {
        siteMetadata {
          languages {
            defaultLang
            fallbackLang
          }
        }
      }
    }
  `);
  // console.log(result)
  const { fallbackLang } = result.data.site.siteMetadata.languages;
  createPage({
    path: `/${fallbackLang}/`,
    component: path.resolve('./src/pages/index.js')
  });
};