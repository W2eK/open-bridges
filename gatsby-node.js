const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      site {
        siteMetadata {
          languages {
            langs
            fallback
          }
        }
      }
    }
  `);
  const { langs } = result.data.site.siteMetadata.languages;
  langs.forEach(lang => {
    createPage({
      path: `/${lang}/`,
      component: path.resolve('./src/pages/index.js'),
      context: { lang }
    });
  })
  
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes, createFieldExtension } = actions;
  const { buildObjectType } = schema;

  createFieldExtension({
    name: 'lang',
    arg: {
      test: 'Int'
    },
    extend(options) {
      return {
        args: {
          lang: {
            type: 'String!',
            defaultValue: 'ru'
          }
        },
        resolve(source, args, context, info) {
          const { fieldName } = info;
          const { lang } = args;
          const sourceField = source[fieldName];
          return sourceField ? sourceField[lang] : null;
        }
      };
    }
  });
  const BridgesJson = buildObjectType({
    name: 'BridgesJson',
    fields: {
      name: {
        type: 'String!',
        extensions: {
          lang: {}
        }
      },
      description: {
        type: 'String',
        extensions: {
          lang: {}
        }
      }
    },
    interfaces: ['Node']
  });
  const RiversJson = buildObjectType({
    name: 'RiversJson',
    fields: {
      name: {
        type: 'String!',
        extensions: {
          lang: {}
        }
      }
    },
    interfaces: ['Node']
  });
  const SiteMetadata = buildObjectType({
    name: 'SiteSiteMetadata',
    fields: {
      title: {
        type: 'String!',
        extensions: {
          lang: {}
        }
      },
      description: {
        type: 'String!',
        extensions: {
          lang: {}
        }
      }
    }
  })
  const typeDefs = [BridgesJson, RiversJson, SiteMetadata];
  createTypes(typeDefs);
};
