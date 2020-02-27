import React, { useContext } from 'react';
import { graphql, navigate } from 'gatsby';

import { LangProvider } from '../hooks/lang-context';
import Meta from '../components/meta';
import Schedule from '../containers/schedule';

const App = props => {
  const {defaultLang, fallbackLang} = props.data.site.siteMetadata.languages;
  const lang = props.path.replace('/', '') === fallbackLang ? fallbackLang : defaultLang;
  const setLang = newLang => navigate(newLang === defaultLang ? '' : `/${fallbackLang}/`);
  return (
    <LangProvider value={{lang, setLang}}>
      <Meta/>
      <Schedule/>
    </LangProvider>
  );
};
export default App;

export const query = graphql`
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
`