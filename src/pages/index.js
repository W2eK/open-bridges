import React from 'react';
import { graphql, navigate } from 'gatsby';
import { getUserLocale } from 'get-user-locale';

import { LangProvider } from '../hooks/lang-context';
import Meta from '../components/meta';
import MainContainer from '../components/main-container';

const App = props => {
  const locale = getUserLocale().split('-')[0];
  const {
    path,
    data: {
      site: { siteMetadata },
      allBridgesJson: { nodes: bridges },
      allRiversJson: { nodes: rivers }
    }
  } = props;
  const { langs, fallback } = siteMetadata.languages;
  const lang = langs.includes(locale) ? locale : fallback;
  if (path === '/') navigate('/' + lang + '/');
  return (
    <LangProvider value={{ lang }}>
      <Meta meta={siteMetadata} />
      <MainContainer bridges={bridges} rivers={rivers}/>
    </LangProvider>
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
        river {
          id
        }
      }
    }
    allRiversJson {
      nodes {
        id
        name(lang: $lang)
      }
    }
  }
`;
