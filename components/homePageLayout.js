import Head from 'next/head';
import { HEADER_DESCRIPTION_ERROR_MESSAGES } from '../graphql/home.queries';
import Nav from './nav';
import {HOME_HEADER_BUTON_TEXT} from '../assets/siteDetails';
import GraphicsElement from './graphicsElement'
import {
  Button,
  Container,
  Image,
  Grid
} from 'semantic-ui-react'

const pageStyles = {
  hero: {
    zIndex: 0,
    position: 'relative',

    width: '100%',
    top: 0,
    backgroundColor: '#229EFD',
    overFlow: 'hidden',
    paddingTop: 110,
    marginTop: -110,
    // minHeight: 400, // If you change this value, also change the value of background in components/animDependencies/animScript.js at line 21 > webGLRenderer.setSize(window.innerWidth, 400);
  },
  minCompositionLayer: {
    backgroundColor: 'white', position: 'relative', zIndex: 2, minHeight: 600,
  },
  pageWrapper: (background_color) => {return({
    backgroundColor: background_color || 'white',
  });},
  heroContainer: { position: 'relative', zIndex: 2, padding: 50 },
  heroContainerHead: { color: 'white', fontSize: '3em', fontWeight: 'bold' },
  heroContainerDescription: { color: 'white', fontSize: '1.45em', fontWeight: 300, paddingTop: '15px' },
  headerImage: {float: 'right', margin: 'auto', height: '100%'}
}

export const HomePageLayout = ({headerData, headerImage, headerImageError, children}) => {
  let title, content
  try {
    title = headerData.posts.edges[0].node.title;
    content = headerData.posts.edges[0].node.content;
  } catch (e) {
    title = HEADER_DESCRIPTION_ERROR_MESSAGES.errorTitle;
    content = HEADER_DESCRIPTION_ERROR_MESSAGES.errorDescription;
  }
  return (
      <div>
        <Nav isHomePage/>
        <Head>
          <title>Home: {title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div style={pageStyles.hero}>
          <GraphicsElement />
          <Container style={pageStyles.heroContainer}>
            <Grid divided='vertically' stackable>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <div>
                    <h1 style={pageStyles.heroContainerHead}>{title.toUpperCase()}</h1>
                    <div style={pageStyles.heroContainerDescription}>
                      <div dangerouslySetInnerHTML={{ __html: content }}/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <Button color="yellow">{HOME_HEADER_BUTON_TEXT}</Button>
                  </div>
                </Grid.Column>
                <Grid.Column only='tablet computer'>
                  {!headerImageError
                    ?
                    <Image width="400" style={pageStyles.headerImage} src={headerImage}/>
                    :
                    <div dangerouslySetInnerHTML={{ __html: headerImageError }}/>
                  }
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
        <div style={pageStyles.minCompositionLayer}>
          {children.length === undefined ?
            <div style={pageStyles.pageWrapper(children.props.bgColor)}>
              <Container>
                    {children}
              </Container>
            </div>
            :
            children.map((section) => {return(
              <div key={section.props.title} style={pageStyles.pageWrapper(section.props.bgColor)}>
                <Container>
                      {section}
                </Container>
              </div>
            )})
          }
        </div>
      </div>
  )
}
