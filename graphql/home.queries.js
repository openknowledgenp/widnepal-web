import gql from 'graphql-tag';

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
  errorTitle: "ERROR: Title is missing",
  errorDescription: "<div>Update CMS for title and description (Add a Post with category: '<b>home</b>' and tag: '<b>site_description</b>').</div>"
}

export const HEADER_MEDIA = gql`
  query Posts {
    mediaItems (where: {categoryName: "home", tag: "header_image"}) {
      nodes {
        mediaItemUrl
      }
    }
  }
`;
export const HEADER_MEDIA_ERROR_MESSAGES = {
  error: "<div><b>Error: Header image is missing.</b><br/><br/>Update CMS for header image (Add a <b>Media</b> with category: '<b>home</b>' and tag: '<b>header_image</b>').</div>"
}

export const ABOUT = gql`
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
export const ABOUT_ERROR_MESSAGES = {
  errorTitle: "ERROR: About us section is missing.",
  errorDescription: "<div>Update CMS for title and description (Add a Post with category: '<b>home</b>' and tag: '<b>about_us</b>').</div>"
}

export const ABOUT_MEDIA = gql`
  query Posts {
    mediaItems (where: {categoryName: "home", tag: "about_featured_image"}) {
      nodes {
        mediaItemUrl
      }
    }
  }
`;
export const ABOUT_MEDIA_ERROR_MESSAGES = {
  error: "<div><b>Error: Featured image is missing.</b><br/><br/>Update CMS for featured image (Add a <b>Media</b> with category: '<b>home</b>' and tag: '<b>about_featured_image</b>').</div>"
}

export const MEDIA = gql`
  query Posts {
    mediaItems (where: {categoryName: "home"}) {
      nodes {
        mediaDetails {
          mediaItemUrl
        }
      }
    }
  }
`;
