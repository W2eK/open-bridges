import React from 'react';
import { graphql, navigate } from 'gatsby';
import { getUserLocale } from 'get-user-locale';

import { LabelProvider } from '../hooks/label-context';
import Meta from '../components/meta';
import MainContainer from '../components/main-container';

const App = props => {
  const {
    path,
    data: {
      site: { siteMetadata },
      allBridgesJson,
      allLabelsJson
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
    const { langs } = siteMetadata.languages;
    const index = langs.indexOf(lang);
    const next = index + 1 === langs.length ? 0 : index + 1;
    navigate('/' + langs[next] + '/');
  };
  const branches = allBridgesJson.nodes.reduce((map, bridge) => {
    const id = parseInt(bridge.branch);
    map.has(id) ? map.get(id).push(bridge) : map.set(id, [bridge]);
    return map;
  }, new Map());
  const labels = new Map(
    allLabelsJson.nodes.map(label => [parseInt(label.id), label])
  );
  return (
    <LabelProvider value={labels}>
      <Meta meta={siteMetadata} />
      <MainContainer branches={branches} labels={labels} setLang={setLang} />
    </LabelProvider>
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
