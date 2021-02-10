import gql from 'graphql-tag';

export const ALL_POSTS = gql`
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
