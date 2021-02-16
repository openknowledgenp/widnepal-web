import {
  Button,
  Container,
} from 'semantic-ui-react'

const pageStyles = {
  section: { paddingTop: 50, paddingBottom: 10, color: 'white', backgroundColor: '#282828' },
  license: { borderTop: '1px solid white', paddingTop: 10, marginTop: 10, width: '100%', clear: 'both' },
  supportedBy: { width: '80%', float: 'left', paddingBottom: 20 },
  otherLinks: { width: '20%', float: 'left', paddingBottom: 20 },
}

const Footer = () => {
  return(
    <div style={pageStyles.section}>
      <Container>
        <div style={pageStyles.supportedBy}>Supported By:</div>
        <div style={pageStyles.otherLinks}>
          <div>Recent News</div>
          <div>Resources</div>
          <div>Committe Members</div>
        </div>
        <div style={pageStyles.license}>
          Content on this site is licensed under a Creative Commons Attribution 4.0 International License.
        </div>
      </Container>
    </div>
  )
}

export default Footer
