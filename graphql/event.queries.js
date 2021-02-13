import gql from 'graphql-tag';

export const POSTS = gql`
  query Posts {
    posts (where: {categoryName: "events"}) {
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
    mediaItems (where: {categoryName: "events"}) {
      nodes {
        mediaDetails {
          file
        }
      }
    }
  }
`;
