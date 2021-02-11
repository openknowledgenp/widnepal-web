import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import { POSTS } from '../graphql/home.queries';
import Nav from './nav';
import {HOME_HEADER_BUTON_TEXT, SITE_NAME, SITE_DESCRIPTION} from '../assets/siteDetails';
import GraphicsElement from './graphicsElement'
import {
  Button,
  Container,
} from 'semantic-ui-react'

const pageStyles = {
  hero: {
    zIndex: 0,
    position: 'absolute',
    width: '100%',
    top: 0,
    backgroundColor: '#229EFD',
    overFlow: 'hidden',
    paddingTop: 140,
    height: 400, // If you change this value, also change the value of background in components/animDependencies/animScript.js at line 21 > webGLRenderer.setSize(window.innerWidth, 400);
  },
  heroContainer: { position: 'relative', zIndex: 2 },
  pageContainer: { marginTop: 330 },
  heroContainerHead: { color: 'white', fontSize: '3em', fontWeight: 'bold' },
  heroContainerDescription: { color: 'white', fontSize: '1.45em', fontWeight: 300, paddingTop: '15px' },
}

export const HomePageLayout = (pageDetail) => <div>
  <Nav isHomePage/>
  <Head>
    <title>Home: {SITE_NAME}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <div style={pageStyles.hero}>
    <GraphicsElement />
    <Container style={pageStyles.heroContainer}>
        <div>
          <h1 style={pageStyles.heroContainerHead}>{SITE_NAME.toUpperCase()}</h1>
          <p style={pageStyles.heroContainerDescription}>{SITE_DESCRIPTION}</p>
          <Button color="yellow">{HOME_HEADER_BUTON_TEXT}</Button>
        </div>
    </Container>
  </div>
  <Container style={pageStyles.pageContainer}>
    {pageDetail.children}
  </Container>
</div>
