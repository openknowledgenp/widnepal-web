import gql from 'graphql-tag';

export const EVENTS = gql`
  query AllEvents {
    events {
      edges {
        node {
          eventDetails {
            description
            endTime
            isPinned
            startTime
            websiteLink
          }
          eventId
          slug
          title
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
export const EVENTS_ERROR_MESSAGES = {
  error: "<br/><div><b>Events are not available.</b></div>"
}

export const POSTS = gql`
  query Posts {
    posts (where: {categoryName: "events"}) {
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
    mediaItems (where: {categoryName: "events"}) {
      nodes {
        mediaDetails {
          file
        }
      }
    }
  }
`;
