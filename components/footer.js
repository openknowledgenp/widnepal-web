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

const Footer = () => {
  const memberOrgs = [
    {
      imageLink:D4D_logo,
      name: 'D4D Nepal',
    },
    {
      imageLink:TAF_logo,
      name: 'The Asia Foundation',
    },
    {
      imageLink:UKAID_logo,
      name: 'UK AID',
    },
    {
      imageLink:DI_logo,
      name: 'Development Initiative',
    },
  ]
  return(
    <div style={pageStyles.section}>
      <Container>
        <Grid style={pageStyles.marginZero}>
          <Grid.Row>
            <Grid.Column width={12} style= {{ padding : 0}}>
              <div style={pageStyles.supportedBy}>Supported By:</div>
              <Grid divided='vertically' stackable style={{ margin: 0}}>
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
                <p style={{paddingBottom: '2px',  margin: '0'}}><a href="/about/thematic-areas" style={pageStyles.whiteLinks}>Thematic Areas</a></p>
                <p style={{ paddingBottom: '2px', margin: '0'}}><a href="/resources" style={pageStyles.whiteLinks}>Resources</a></p>
                <p style={{ paddingBottom: '2px', margin: '0' }}><a href="/blog" style={pageStyles.whiteLinks}>Blog</a></p>
                <p style={{ paddingBottom: '2px', margin: '0' }}><a href="/event/upcoming-events" style={pageStyles.whiteLinks}>Upcoming Events</a></p>
              </div>
            </Grid.Column>
          </Grid.Row>
            <div style={pageStyles.license}>
              Content on this site is licensed under a <a target="_blank" href="http://creativecommons.org/licenses/by-sa/4.0/" >Creative Commons Attribution-ShareAlike 4.0 International License</a>. <a target="_blank" href="https://github.com/okfnepal/widnepal-web">Source code</a> available under the MIT license. Developed and managed by <a target="_blank" href="http://oknp.org/">Open Knowledge Nepal</a>.
            </div>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer

const FONT_SIZE = 16
const pageStyles = {
  section: { paddingTop: 50, paddingBottom: 10, color: 'white', backgroundColor: '#282828', fontSize: FONT_SIZE, position: 'relative',  },
  license: { borderTop: '1px solid white', padding: '10px 0 0 0', marginTop: 10, width: '100%', clear: 'both', fontSize: FONT_SIZE },
  supportedBy: {paddingBottom: 10, fontSize: 17 },
  otherLinks: {padding: 20, fontSize: FONT_SIZE },
  marginZero: {margin:0},
  whiteLinks: {color:'white'},
  suportList: { margin: 0},
  memberOrgImage: {maxWidth: 'auto', maxHeight: '80px', padding: 15, backgroundColor: 'white'},
}
