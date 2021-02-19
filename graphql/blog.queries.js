import gql from 'graphql-tag';

export const BLOGS = gql`
  query MyQuery {
    blogs {
      edges {
        node {
          blogDetails {
            blog
            isPinned
          }
          title
          slug
          blogId
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
  error: "<div><div><h2>ERROR: Blogs are not available</h2></div><div>Update CMS for blogs (Add a Post with category: '<b>blog</b>').</div></div>",
}

export const MEDIA = gql`
  query Posts {
    mediaItems (where: {categoryName: "blog"}) {
      nodes {
        mediaDetails {
          file
        }
      }
    }
  }
`;



export const BLOG_WITH_SLUG = (slug) => gql`
  query MyQuery {
    blogs(where: {name: "${slug}"}) {
      edges {
        node {
          blogDetails {
            blog
            isPinned
          }
          title
          slug
          blogId
          featuredImage {
            node {
              mediaItemUrl
              author {
                node {
                  firstName
                  lastName
                  description
                  avatar {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
