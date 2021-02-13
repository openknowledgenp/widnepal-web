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
export const HEADER_DESCRIPTION_ERROR_MESSAGES = {
  errorHomeTitle: "Update CMS to get the title (with category: 'home' and tag: 'site_description').",
  errorHomeDescription: "Update CMS to get the description (with category: 'home' and tag: 'site_description')."
}

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
