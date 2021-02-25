import gql from 'graphql-tag';

export const RESOURCES = gql`
  query MyQuery {
    resources {
      edges {
        node {
          resourceDetails {
            description
            isPinned
            attachedFile {
              mediaItemUrl
            }
          }
          title
          slug
          resourceId
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;
export const RESOURCES_ERROR_MESSAGES = {
  error: "<br/><div><b>Resources are not available.</b><br/><br/></div>"
}

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

export const MEDIA = gql`
  query Posts {
    mediaItems (where: {categoryName: "resources"}) {
      nodes {
        mediaDetails {
          file
        }
      }
    }
  }
`;
