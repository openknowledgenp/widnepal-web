import gql from 'graphql-tag';

export const POSTS = gql`
  query Posts {
    posts (where: {categoryName: "program-or-project"}) {
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
