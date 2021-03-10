import Nav from '../components/nav';
import Head from 'next/head';
import GraphicsElement from '../components/graphicsElement'
import {
  Container,
} from 'semantic-ui-react'
import Footer from './footer'
import Truncate from 'react-truncate';
import {
  Image,
  Grid
} from 'semantic-ui-react'
import { useQuery } from '@apollo/react-hooks';
import { NAV_SITE_LOGO, NAV_SITE_LOGO_CONTENT_MAP } from '../graphql/common.queries.js';
import { Loading } from './loading'
import Sidebar from './sidebar'

export const PageLayout = ({title, children, format, headerImage, noHero}) => {
  let resultObject = {}
  let errorReport = {}

  const [
      { loading: navLogoLoading, data: navLogoData, error: navLogoError },
  ] = [ useQuery(NAV_SITE_LOGO) ];

  if ( navLogoLoading ) return <Loading />
  if ( navLogoError ) return <p>Error: {JSON.stringify(eventsError)}</p>

  try {
    resultObject = navLogoData.homepageitems.edges[0].node.homepageitems
  } catch (e) {
    resultObject['siteLogo'] = NAV_SITE_LOGO_CONTENT_MAP['Site Logo'].nullError
    errorReport['siteLogoHasError'] = true
  }

  return (
    <div>
      <Nav {...{resultObject, errorReport}}/>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!noHero &&
      <div style={pageStyles.hero}>
        <GraphicsElement />
        <Container style={format === undefined ? pageStyles.heroContainer : pageStyles.formattedHead(format)}>
          <Truncate lines={2} ellipsis={<span>...</span>}>
            {title}
          </Truncate>
          <Image src={headerImage} style={pageStyles.headerImage}/>
        </Container>
      </div>}
      <div style={pageStyles.pageContainerWrapper}>
        {format!=="conferenceread" &&
        <Container style={format === undefined ? pageStyles.pageContainer : pageStyles.formattedContainer(format)}>
          <br/>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={11}>
                {children}
              </Grid.Column>
              <Grid.Column width={5}>
                <Sidebar/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>}
        {format=="conferenceread" &&
        children.map((section) => {console.log(section);return(
          <div key={section.type && section.type.name} style={pageStyles.bgImage(section.props && section.props.bgImageLink)}>
          <div style={pageStyles.pageWrapper(section.props && section.props.bgColor ,section.props && section.props.bgSize)}>
            <Container>
                  {section}
            </Container>
            </div>
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
    position: 'absolute',
    width: '100%',
    top: 0,
    backgroundColor: '#229EFD',
    overFlow: 'hidden',
    paddingTop: 0,
    marginTop: 100,
    height: 600, // If you change this value, also change the value of background in components/anumDependencies at line 21 > webGLRenderer.setSize(window.innerWidth, 400);
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    marginTop: 55
  },
  heroContainer: { position: 'relative', zIndex: 2, color: 'white', fontSize: 30, margin: 30, fontWeight: '600' },
  formattedHead: (format) => {
    if (format === 'blogread' || format === 'projectread' || format === 'resourceread' || format === 'eventread') {
      return ({
        position: 'relative',
        zIndex: 2,
        color: 'white',
        fontSize: 30,
        fontWeight: '600',
        margin: 30,
        marginTop: 40,
        lineHeight: 1.3,
      })
    }
  },
  pageContainer: { marginTop: 80, paddingTop: 30 },
  formattedContainer: (format) => {
    if (format === 'blogread' || format === 'projectread' || format === 'resourceread' || format === 'eventread') {
      return ({
        marginTop: 120, paddingTop: 30
      })
    } else if (format === 'conferenceread') {
      return ({
        marginTop: 0, paddingTop: 0
      })
    }
  },
  bgImage: (imageLink) => {
    if (imageLink) {
      return ({
          backgroundImage: `url(${imageLink})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
      })
    }
    else {
      return ({})
    }
  },
  pageWrapper: (background_color, bgSize) => {return(
    bgSize === undefined ? {
      backgroundColor: background_color || 'white'
    }: {
      background: `linear-gradient(90deg, ${background_color} 0%, ${background_color} ${bgSize}, white ${bgSize}, white 100%)`,
    }
  );},
  pageContainerWrapper: {zIndex: 3, position: 'relative', backgroundColor: 'white', minHeight: 600},
}
