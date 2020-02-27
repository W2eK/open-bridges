import React from 'react';
import Helmet from 'react-helmet';

import useMeta from '../hooks/use-meta';

const Meta = () => {
  const {title, description, author, lang} = useMeta();
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        {
          name: 'description',
          content: description
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: description
        },
        {
          name: 'twitter:creator',
          content: author
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: description
        }
      ]}
    />
  );
};

export default Meta;
