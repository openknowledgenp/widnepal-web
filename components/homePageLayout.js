import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import { POSTS } from '../graphql/home.queries';
import HeaderImage from "../assets/images/header_img.svg"
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
  pageWrapper: {
    // marginTop: 330,
    // position: 'absolute'
    position: 'relative', zIndex: 2, minHeight: 600,
    backgroundColor: 'white'
  },
  heroContainer: { position: 'relative', zIndex: 2, padding: 50 },
  heroContainerHead: { color: 'white', fontSize: '3em', fontWeight: 'bold' },
  heroContainerDescription: { color: 'white', fontSize: '1.45em', fontWeight: 300, paddingTop: '15px' },
  headerImage: {float: 'right', margin: 'auto', height: '100%'}
}

export const HomePageLayout = (pageDetail) => {
  let title, content
  const { errorHomeTitle, errorHomeDescription } = {
    errorHomeTitle: "Update CMS to get the title (with category: 'home' and tag: 'site_description').",
    errorHomeDescription: "Update CMS to get the description (with category: 'home' and tag: 'site_description')."
  }
  try {
    title = pageDetail.data.posts.edges[0].node.title;
    content = pageDetail.data.posts.edges[0].node.content;
  } catch (e) {
    title = errorHomeTitle;
    content = errorHomeDescription;
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
                  <Image width="400" style={pageStyles.headerImage} src={HeaderImage}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
        <div style={pageStyles.pageWrapper}>
          <Container style={pageStyles.pageContainer}>
            {pageDetail.children}
          </Container>
        </div>
      </div>
  )
}
