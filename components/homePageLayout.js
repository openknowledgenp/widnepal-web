import Head from 'next/head';
import Nav from './nav';
import GraphicsElement from './graphicsElement'
import Footer from './footer'
import {
  Button,
  Container,
  Image,
  Grid
} from 'semantic-ui-react'
import Banner from '../assets/og_image.jpg';

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
          <meta name="title" content={title.data}/>

          <meta
            name="description"
            content="Women in Data Steering Committee work together to identify possible existing problems targeted around women and the scope of area in today’s society. Alongside this identification, the committee will uphold itself as a platform to solve these problems."
          />
          <meta
            property="og:image"
            content={`https://raw.githubusercontent.com/okfnepal/widnepal-web/master/assets/og_image.jpg`}
          />
          <meta name="og:title" content={title.data} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title.data}/>
          <meta name="twitter:description" content="Women in Data Steering Committee work together to identify possible existing problems targeted around women and the scope of area in today’s society. Alongside this identification, the committee will uphold itself as a platform to solve these problems."/>
          <meta name="twitter:image" content={`https://raw.githubusercontent.com/okfnepal/widnepal-web/master/assets/og_image.jpg`}/>
          <meta name="keywords" content="womenindata, nepal, women in data nepal, technology, open data, open data nepal"/>

          <meta property="og:type" content="website"/>
          <meta property="og:description" content="Women in Data Steering Committee work together to identify possible existing problems targeted around women and the scope of area in today’s society. Alongside this identification, the committee will uphold itself as a platform to solve these problems.
          "/>
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
                  <Button style={{ cursor: "pointer" }} color="yellow" href="/about/thematic-areas">Thematic Areas</Button>
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

const FONT_SIZE = 17
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
  heroContainer: { position: 'relative', zIndex: 2, paddingTop: 90, paddingBottom: 100 },
  heroContainerHead: { color: 'white', fontSize: '30px', fontWeight: '600' },
  heroContainerDescription: { color: 'white', fontSize: FONT_SIZE, fontWeight: '400', paddingTop: '15px', marginBottom: '30px' },
  headerImage: {margin: 'auto', maxHeight: 240, width: 'auto', textAlign: 'center'}
}
