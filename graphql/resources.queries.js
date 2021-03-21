import gql from 'graphql-tag';

export const RESOURCES = gql`
  query MyQuery {
    resources(first: 1000) {
      edges {
        node {
          id
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

export const RESOURCE_WITH_SLUG = (slug) => gql`
query MyQuery {
  resources(where: {name: "${slug}"}) {
    edges {
      node {
        title
        slug
        id
        date
        lastEditedBy {
          node {
            firstName
            avatar {
              url
            }
            lastName
            description
            nickname
          }
        }
        resourceDetails {
          description
          attachedFile {
            mediaItemUrl
          }
        }
      }
    }
  }
}
`;
