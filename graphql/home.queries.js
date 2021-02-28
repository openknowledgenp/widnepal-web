import gql from 'graphql-tag';

export const HOMEPAGE_DETAIL = gql`
query MyQuery {
  homepageitems(first: 100) {
    edges {
      node {
        homepageitems {
          homepageElement
          aboutUs
          joinUsDescription
          siteDescription
          siteTitle
          siteLogo {
            mediaItemUrl
          }
          siteBannerImage {
            mediaItemUrl
          }
          addMemberOrganizations {
            name
            websiteUrl
            logo {
              mediaItemUrl
            }
          }
          aboutUsBannerImage {
            mediaItemUrl
          }
        }
      }
    }
  }
}
`;

export const HOMEPAGE_CONTENT_MAP = {
  'Site Logo' : {
    element: 'siteLogo',
    nullError: '<div><b>No Site Logo</b></div>',
  },
  'Site Title' : {
    element: 'siteTitle',
    nullError: '<div><b>Site Title</b> is not available</div>',
  },
  'Site Description' : {
    element: 'siteDescription',
    nullError: '<div><b>Site Description</b> is not available.</div>',
  },
  'Site Banner Image' : {
    element: 'siteBannerImage',
    nullError: '<div><b>Site Banner Image</b> is not available.</div>',
  },
  'About Us' : {
    element: 'aboutUs',
    nullError: '<div><b>About Us</b> information is not available.</div>',
  },
  'About Us Banner Image' : {
    element: 'aboutUsBannerImage',
    nullError: '<div><b>About Us Banner Image</b> is not available.</div>',
  },
  'Member Organizations' : {
    element: 'addMemberOrganizations',
    nullError: '<div><b>Member Organizations</b> are not available.</div>',
  },
  'Join Us Info' : {
    element: 'joinUsDescription',
    nullError: '<div><b>Join Us Info</b> is not available.</div>',
  },
}
