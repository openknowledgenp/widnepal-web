import gql from 'graphql-tag';

export const POSTS = gql`
  query Posts {
    posts (where: {categoryName: "resources"}) {
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
