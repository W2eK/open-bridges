import React from 'react';
import { graphql, navigate } from 'gatsby';
import { getUserLocale } from 'get-user-locale';

import Meta from '../components/meta';
import MainContainer from '../components/main-container';

const App = props => {
  
  const {
    path,
    data: {
      site: { siteMetadata },
      allBridgesJson: { nodes: bridges },
      allLabelsJson: { nodes: labels }
    }
  } = props;
  if (path === '/') {
    const locale = getUserLocale().split('-')[0];
    const { langs, fallback } = siteMetadata.languages;
    const lang = langs.includes(locale) ? locale : fallback;
    navigate('/' + lang + '/');
  }
  const setLang = () => {
    const lang = path.split('/')[1];
    const { langs } = siteMetadata.languages
    const index = langs.indexOf(lang);
    const next = index + 1 === langs.length ? 0 : index + 1
    navigate('/' + langs[next] + '/');
  }
  return (
    <>
      <Meta meta={siteMetadata} />
      <MainContainer bridges={bridges} labels={labels} setLang={setLang}/>
    </>
  );
};
export default App;

export const query = graphql`
  query($lang: String) {
    site {
      siteMetadata {
        title(lang: $lang)
        description(lang: $lang)
        author
        languages {
          langs
          fallback
        }
      }
    }
    allBridgesJson {
      nodes {
        id
        name(lang: $lang)
        description(lang: $lang)
        schedule
        moveable
        branch
      }
    }
    allLabelsJson {
      nodes {
        id
        name(lang: $lang)
      }
    }
  }
`;
