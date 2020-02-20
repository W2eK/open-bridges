import { graphql, useStaticQuery } from 'gatsby';

const useData = () => {
  const query = graphql`
    query {
      allBridgesJson {
        nodes {
          id
          name
        }
      }
    }
  `
  const data = useStaticQuery(query)
  return data.allBridgesJson.nodes;
}

export default useData;