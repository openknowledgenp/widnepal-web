import gql from 'graphql-tag';

export const BLOGS = gql`
  query MyQuery {
    blogs(first: 1000) {
      edges {
        node {
          blogDetails {
            blog
            isPinned
          }
          categories {
            nodes {
              name
              id
            }
          }
          tags {
            nodes {
              name
              id
              slug
            }
          }
          title
          slug
          id
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

export const BLOGS_WITH_TAG = (slug) => gql`
  query MyQuery {
    blogs(first: 1000, where: {tag: "${slug}"}) {
      edges {
        node {
          blogDetails {
            blog
            isPinned
          }
          categories {
            nodes {
              name
              id
            }
          }
          tags {
            nodes {
              name
              id
            }
          }
          title
          slug
          id
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
export const BLOGS_WITH_CATEGORY = (slug) => gql`
  query MyQuery {
    blogs(first: 1000, where: {categoryName: "${slug}"}) {
      edges {
        node {
          blogDetails {
            blog
            isPinned
          }
          categories {
            nodes {
              name
              id
            }
          }
          tags {
            nodes {
              name
              id
            }
          }
          title
          slug
          id
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
export const BLOGS_ERROR_MESSAGES = {
  error: "<div><h2>Blogs are not available</h2></div>",
}

export const BLOG_WITH_SLUG = (slug) => gql`
  query MyQuery {
    blogs(where: {name: "${slug}"}) {
      edges {
        node {
          blogDetails {
            blog
            isPinned
            author
          }
          categories {
            nodes {
              name
              id
            }
          }
          tags {
            nodes {
              name
              id
            }
          }
          title
          slug
          date
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          lastEditedBy {
            node {
              firstName
              avatar {
                url
              }
              lastName
              description
              nickname
              user_organizational_association {
                organizationalAssociation
              }
            }
          }
        }
      }
    }
  }
`;
