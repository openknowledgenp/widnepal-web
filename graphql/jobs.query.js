import gql from 'graphql-tag';

const JOBS_QUERY = gql`
  query Posts {
    posts {
      edges {
        node {
          id
          title
          slug
          content
        }
      }
    }
  }
`;

export default JOBS_QUERY;
