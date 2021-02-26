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
            page
          }
          id
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

export const EVENT_WITH_SLUG = (slug) => gql`
query MyQuery {
  events(where: {name: "${slug}"}) {
    edges {
      node {
        eventDetails {
          description
          endTime
          isPinned
          startTime
          websiteLink
          page
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
