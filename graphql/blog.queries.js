import gql from 'graphql-tag';

export const BLOGS = gql`
  query Blogs {
    posts(where: {categoryName: "blog"}) {
      edges {
        node {
          id
          title
          slug
          content
          postAttachedImage {
            image {
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

export const POST_WITH_SLUG = (slug) => gql`
  query Blogs {
    posts (where: {categoryName: "blog", name: "${slug}"}) {
      edges {
        node {
          id
          title
          slug
          content
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
`;
