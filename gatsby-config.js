const languages = require('./data/languages');

module.exports = {
  siteMetadata: {
    title: 'График разводки мостов',
    description: 'Расписание разводки мостов в Петербурге на 2020 год',
    author: 'Vladimir Osokin',
    languages
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './data/'
      }
    }
  ]
}
