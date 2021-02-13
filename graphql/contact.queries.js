import gql from 'graphql-tag';

export const POSTS = gql`
  query Posts {
    posts (where: {categoryName: "contact"}) {
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

export const MEDIA = gql`
  query Posts {
    mediaItems (where: {categoryName: "contact"}) {
      nodes {
        mediaDetails {
          file
        }
      }
    }
  }
`;
