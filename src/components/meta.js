import React from 'react';
import Helmet from 'react-helmet';

const Meta = ({meta}) => {
  const {title, description, credits, lang} = meta;
  const author = credits[0].name;
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
