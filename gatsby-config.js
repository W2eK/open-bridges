module.exports = {
  siteMetadata: {
    title: 'График разводки мостов',
    description: 'Расписание разводки мостов в Петербурге на 2020 год',
    author: 'Vladimir Osokin',
    lang: 'ru'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './data/'
      }
    },
    'gatsby-transformer-json'
  ]
}
