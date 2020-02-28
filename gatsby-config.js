const languages = require('./data/languages');

module.exports = {
  siteMetadata: {
    title: {
      en: 'Bridge opening schedules',
      ru: 'График разводки мостов'
    },
    description: {
      en: 'Timetable of St. Petersburg\'s bridge openings in 2020',
      ru: 'Расписание разводки мостов в Петербурге на 2020 год'
    },
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
