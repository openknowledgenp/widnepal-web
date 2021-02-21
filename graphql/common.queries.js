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
    nullError: '<div><b>No Site Logo</b>. Add "Site Logo" <b>CMS > Homepage Items</b></div>',
  },
}
