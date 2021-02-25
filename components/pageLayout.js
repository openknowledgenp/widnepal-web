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
} from 'semantic-ui-react'
import { useQuery } from '@apollo/react-hooks';
import { NAV_SITE_LOGO, NAV_SITE_LOGO_CONTENT_MAP } from '../graphql/common.queries.js';
import { Loading } from './loading'

export const PageLayout = ({title, children, format, headerImage}) => {
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
      <div style={pageStyles.hero}>
        <GraphicsElement />
        <Container style={format === undefined ? pageStyles.heroContainer : pageStyles.formattedHead(format)}>
          <Truncate lines={2} ellipsis={<span>...</span>}>
            {title}
          </Truncate>
          <Image src={headerImage} style={pageStyles.headerImage}/>
        </Container>
      </div>
      <div style={pageStyles.pageContainerWrapper}>
        <Container style={format === undefined ? pageStyles.pageContainer : pageStyles.formattedContainer(format)}>
          {children}
        </Container>
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
    marginTop: 65
  },
  heroContainer: { position: 'relative', zIndex: 2, color: 'white', fontSize: 30, margin: 30, fontWeight: '600' },
  formattedHead: (format) => {
    if (format === 'blogread' || format === 'projectread') {
      return ({
        position: 'relative',
        zIndex: 2,
        color: 'white',
        fontSize: 26,
        fontWeight: '600',
        margin: 30,
        lineHeight: 1.3,
      })
    }
  },
  pageContainer: { marginTop: 80, paddingTop: 30 },
  formattedContainer: (format) => {
    if (format === 'blogread' || format === 'projectread') {
      return ({
        marginTop: 120, paddingTop: 30
      })
    }
  },
  pageContainerWrapper: {zIndex: 3, position: 'relative', backgroundColor: 'white', minHeight: 600},
}
