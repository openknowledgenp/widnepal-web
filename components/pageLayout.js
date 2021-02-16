import Nav from '../components/nav';
import Head from 'next/head';
import GraphicsElement from '../components/graphicsElement'
import {
  Container,
} from 'semantic-ui-react'
import Footer from './footer'


export const PageLayout = (pageDetail) => <div>
  <Nav/>
  <Head>
    <title>{pageDetail.title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <div style={pageStyles.hero}>
    <GraphicsElement />
    <Container style={pageStyles.heroContainer}>
        {pageDetail.title}
    </Container>
  </div>
  <div style={pageStyles.pageContainerWrapper}>
    <Container style={pageStyles.pageContainer}>
      {pageDetail.children}
    </Container>
  </div>
  <Footer/>

</div>

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
  heroContainer: { position: 'relative', zIndex: 2, color: 'white', fontSize: 32, padding: 30 },
  pageContainerWrapper: {zIndex: 3, position: 'relative', backgroundColor: 'white', minHeight: 600},
  pageContainer: { marginTop: 80, paddingTop: 30 },
}
