import gql from 'graphql-tag';

export const PROJECTS = gql`
query MyQuery {
  projects {
    edges {
      node {
        id
        title
        slug
        projectDetails {
          brief
        }
      }
    }
  }
}
`;

export const PROJECT_ERROR_MESSAGES = {
  error: "<div><h2>Projects are not available</h2></div>",
}

export const PROJECT_WITH_SLUG = (slug) => gql`
query MyQuery {
  projects(where: {name: "${slug}"}) {
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
        projectDetails {
          brief
        }
      }
    }
  }
}
`;
