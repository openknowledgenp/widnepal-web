import Head from 'next/head';
import { HEADER_DESCRIPTION_ERROR_MESSAGES } from '../graphql/home.queries';
import Nav from './nav';
import {HOME_HEADER_BUTON_TEXT} from '../assets/siteDetails';
import GraphicsElement from './graphicsElement'
import Footer from './footer'
import {
  Button,
  Container,
  Image,
  Grid
} from 'semantic-ui-react'

export const HomePageLayout = ({resultObject, errorReport, children}) => {
  const title = {data: resultObject['siteTitle'], errStatus: errorReport['siteTitleHasError']}
  const content = {data: resultObject['siteDescription'], errStatus: errorReport['siteDescriptionHasError']}
  const bannerImage = {data: resultObject['siteBannerImage'], errStatus: errorReport['siteBannerImageHasError']}
  const renderHTML = (data) => <div dangerouslySetInnerHTML={{ __html: data }}/>
  return (
      <div>
        <Nav {...{isHomePage: true, resultObject, errorReport}}/>
        <Head>
          <title>{title.errStatus ? 'Home' : `${title.data} | Home`}</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/fonts/Varela-Regular.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <div style={pageStyles.hero}>
          <GraphicsElement />
          <Container style={pageStyles.heroContainer}>
            <Grid divided='vertically' stackable>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <div>
                    {title.errStatus ? renderHTML(title.data) : <h1 style={pageStyles.heroContainerHead}>{title.data.toUpperCase()}</h1>}
                    {content.errStatus ? renderHTML(content.data) :
                      <div style={pageStyles.heroContainerDescription}>
                        <div dangerouslySetInnerHTML={{ __html: content.data }}/>
                      </div>
                    }
                    <br/>
                    <br/>
                    <br/>
                    <Button color="yellow">{HOME_HEADER_BUTON_TEXT}</Button>
                  </div>
                </Grid.Column>
                <Grid.Column only='tablet computer'>
                  {bannerImage.errStatus
                    ?
                    <div dangerouslySetInnerHTML={{ __html: bannerImage.data }}/>
                    :
                    <Image style={pageStyles.headerImage} src={bannerImage.data.mediaItemUrl}/>
                  }
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
        <div style={pageStyles.minCompositionLayer}>
          {children.length === undefined ?
            <div style={pageStyles.pageWrapper(children.props.bgColor, children.props.bgSize)}>
              <Container>
                    {children}
              </Container>
            </div>
            :
            children.map((section) => {return(
              <div key={section.type.name} style={pageStyles.pageWrapper(section.props.bgColor, section.props.bgSize)}>
                <Container>
                      {section}
                </Container>
              </div>
            )})
          }
        </div>
        <Footer/>
      </div>
  )
}

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
  pageWrapper: (background_color, bgSize) => {return(
    bgSize === undefined ? {
      backgroundColor: background_color || 'white'
    }: {
      background: `linear-gradient(90deg, ${background_color} 0%, ${background_color} ${bgSize}, white ${bgSize}, white 100%)`,
    }
  );},
  heroContainer: { position: 'relative', zIndex: 2, padding: 50 },
  heroContainerHead: { color: 'white', fontSize: '3em', fontWeight: 'bold' },
  heroContainerDescription: { color: 'white', fontSize: '1.45em', fontWeight: 300, paddingTop: '15px' },
  headerImage: {margin: 'auto', maxHeight: 280, width: 'auto', textAlign: 'center'}
}
