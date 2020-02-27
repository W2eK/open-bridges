import { graphql, useStaticQuery } from 'gatsby';

const useMeta = () => {
  const query = graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `;
  const data = useStaticQuery(query)
  return data.site.siteMetadata;
}

export default useMeta;