import gql from 'graphql-tag';

export const POSTS = gql`
  query Posts {
    posts (where: {categoryName: "home", tag: "about_us" }) {
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

export const HEADER_DESCRIPTION = gql`
  query Posts {
    posts (where: {categoryName: "home", tag: "site_description" }) {
      edges {
        node {
          title
          content
          link
          uri
        }
      }
    }
  }
`;

export const MEDIA = gql`
  query Posts {
    mediaItems (where: {categoryName: "home"}) {
      nodes {
        mediaDetails {
          file
        }
      }
    }
  }
`;
