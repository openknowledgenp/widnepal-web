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

export const Projects_ERROR_MESSAGES = {
  error: "<div><div><h2>ERROR: Blogs are not available</h2></div><div>Update CMS for blogs (Add a Post with category: '<b>blog</b>').</div></div>",
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
