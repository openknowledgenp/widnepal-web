import gql from 'graphql-tag';

export const NAV_SITE_LOGO = gql`
query MyQuery {
  homepageitems(where: {search: "Site Logo"}) {
    edges {
      node {
        homepageitems {
          homepageElement
          siteLogo {
            mediaItemUrl
          }
        }
      }
    }
  }
}
`;
export const NAV_SITE_LOGO_CONTENT_MAP = {
  'Site Logo' : {
    element: 'siteLogo',
    nullError: '<div><b>No Site Logo</b></div>',
  },
}


export const NAV_BAR_OPTIONS = gql`
query MyQuery {
  abouts {
    edges {
      node {
        id
        about_us_page {
          page
          pageTitle
        }
      }
    }
  }
  events {
    edges {
      node {
        id
        eventDetails {
          page
          pageTitle
        }
      }
    }
  }
}
`;
