import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Meta = () => {
  const { site: { siteMetadata: { title, description, author, lang }} } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            lang
          }
        }
      }
    `
  );
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

Meta.defaultProps = {
  lang: 'ru',
  meta: [],
  description: ''
};

Meta.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default Meta;
