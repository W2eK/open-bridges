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
    credits: [
      {
        type: {
          en: 'Author',
          ru: 'Автор'
        },
        name: {
          en: 'Vladimir Osokin',
          ru: 'Владимир Осокин'
        },
        site: 'http://w2ek.github.io'
      },
      {
        type: {
          en: 'Icons',
          ru: 'Иконки'
        },
        name: {
          en: 'Egor Zhgun',
          ru: 'Егор Жгун'
        },
        site: 'https://www.artlebedev.ru/spb/metro-map/'
      }
    ],
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
