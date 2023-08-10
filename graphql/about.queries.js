import gql from 'graphql-tag';

export const ABOUT_US_CONTENT = gql`
query MyQuery {
  abouts(first: 30) {
    edges {
      node {
        aboutId
        about_us_page {
          page
          pageTitle
          pageContent
          learnAboutUs
          insertOption
          introduction
          member {
            description
            organizationName
            logo {
              mediaItemUrl
            }
          }
          socialMediaLinksAndEmail {
            email
            facebook
            linkedin
            twitter
            website
          }
        }
      }
    }
  }
}

`
export const ABOUT_US_CONTENT_ERROR = {
  error: "<div><h2>About section is not available</h2></div>",
}
