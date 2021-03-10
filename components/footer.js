import {
  Button,
  Container,
  Grid,
  Image
} from 'semantic-ui-react'

import D4D_logo from '../assets/footer/d4d.png'
import DI_logo from '../assets/footer/di.png'
import TAF_logo from '../assets/footer/taf.png'
import UKAID_logo from '../assets/footer/ukaid.png'

const pageStyles = {
  section: { paddingTop: 50, paddingBottom: 10, color: 'white', backgroundColor: '#282828', fontSize: 18, position: 'relative',  },
  license: { borderTop: '1px solid white', paddingTop: 10, marginTop: 10, width: '100%', clear: 'both', fontSize: 18 },
  supportedBy: {paddingBottom: 20, fontSize: 18 },
  otherLinks: {paddingBottom: 20, fontSize: 18 },
  marginZero: {margin:0},
  whiteLinks: {color:'white'},
  memberOrgImage: {maxWidth: '200px', maxHeight: '80px', padding: 10, backgroundColor: 'white'},
}

const Footer = () => {
  const memberOrgs = [
    {
      imageLink:D4D_logo,
      name: 'D4D Nepal',
    },
    {
      imageLink:DI_logo,
      name: 'The Asia Foundation',
    },
    {
      imageLink:TAF_logo,
      name: 'UK AID',
    },
    {
      imageLink:UKAID_logo,
      name: 'Development Initiative',
    },
  ]
  return(
    <div style={pageStyles.section}>
      <Container>
        <Grid style={pageStyles.marginZero}>
          <Grid.Row>
            <Grid.Column width={12}>
              <div style={pageStyles.supportedBy}>Supported By:</div>
                <Grid divided='vertically' stackable>
                  <Grid.Row columns={memberOrgs.length} style={pageStyles.suportList}>
                    {memberOrgs.map(memberOrg=>{return(
                        <Image src={memberOrg.imageLink} key={memberOrg.name} style={pageStyles.memberOrgImage} />
                    )})}
                  </Grid.Row>
                </Grid>
              <div/>
            </Grid.Column>
            <Grid.Column width={4}>
              <div style={pageStyles.otherLinks}>
                <div><a href="/about/other?page=Thematic%20Areas" style={pageStyles.whiteLinks}>Thematic Areas</a></div>
                <br/>
                <div><a href="/resources" style={pageStyles.whiteLinks}>Resources</a></div>
                <br/>
                <div><a href="/blog" style={pageStyles.whiteLinks}>Blog</a></div>
                <br/>
                <div><a href="/event/upcoming-events" style={pageStyles.whiteLinks}>Upcoming Events</a></div>
              </div>
            </Grid.Column>
          </Grid.Row>
          <br/>
          <br/>
            <div style={pageStyles.license}>
              Content on this site is licensed under a <a target="_blank" href="http://creativecommons.org/licenses/by-sa/4.0/" >Creative Commons Attribution-ShareAlike 4.0 International License</a>. <a target="_blank" href="https://github.com/okfnepal/widnepal-web">Source code</a> available under the MIT license. Developed and managed by <a target="_blank" href="http://oknp.org/">Open Knowledge Nepal</a>.
            </div>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer
