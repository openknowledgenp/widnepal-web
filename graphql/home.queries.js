import gql from 'graphql-tag';

export const HOMEPAGE_DETAIL = gql`
query MyQuery {
  homepageitems {
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
    nullError: '<div><b>No Site Logo</b>. Add "Site Logo" <b>CMS > Homepage Items</b></div>',
  },
  'Site Title' : {
    element: 'siteTitle',
    nullError: '<div>Error: <b>Site Title</b> is not available. Goto CMS and add "Site Title" from <b>Homepage Items</b> section.</div>',
  },
  'Site Description' : {
    element: 'siteDescription',
    nullError: '<div>Error: <b>Site Description</b> is not available. Goto CMS and add "Site Description" from <b>Homepage Items</b> section.</div>',
  },
  'Site Banner Image' : {
    element: 'siteBannerImage',
    nullError: '<div>Error: <b>Site Banner Image</b> is not available. Goto CMS and add "Site Banner Image" from <b>Homepage Items</b> section.</div>',
  },
  'About Us' : {
    element: 'aboutUs',
    nullError: '<div>Error: <b>About Us</b> is not available. Goto CMS and add "About Us" from <b>Homepage Items</b> section.</div>',
  },
  'About Us Banner Image' : {
    element: 'aboutUsBannerImage',
    nullError: '<div>Error: <b>About Us Banner Image</b> is not available. Goto CMS and add "About Us Banner Image" from <b>Homepage Items</b> section.</div>',
  },
  'Member Organizations' : {
    element: 'addMemberOrganizations',
    nullError: '<div>Error: <b>Member Organizations</b> are not available. Goto CMS and add "Member Organizations" from <b>Homepage Items</b> section.</div>',
  },
  'Join Us Info' : {
    element: 'joinUsDescription',
    nullError: '<div>Error: <b>Join Us Info</b> is not available. Goto CMS and add "Join Us Info" from <b>Homepage Items</b> section.</div>',
  },
}
