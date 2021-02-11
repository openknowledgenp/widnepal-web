import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import { POSTS } from '../../graphql/about.queries';
import Nav from '../../components/nav';
import GraphicsElement from '../../components/graphicsElement'
import {
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
    paddingTop: 0,
    marginTop: 100,
    height: 400, // If you change this value, also change the value of background in components/anumDependencies at line 21 > webGLRenderer.setSize(window.innerWidth, 400);
  },
  heroContainer: { position: 'relative', zIndex: 2, color: 'white', fontSize: 32, padding: 30 },
  pageContainerWrapper: {zIndex: 3, position: 'relative', backgroundColor: 'white', minHeight: 400},
  pageContainer: { marginTop: 80, paddingTop: 30 },
}

const About = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(POSTS);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return (
    <div>
      <Nav/>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={pageStyles.hero}>
        <GraphicsElement isAboutPage />
        <Container style={pageStyles.heroContainer}>
            About Us
        </Container>
      </div>
      <div style={pageStyles.pageContainerWrapper}>
      <Container style={pageStyles.pageContainer}>
        <div>
          about us detail
          {data.posts.edges.map(post => {
            return (
              <div key={`post__${post.node.id}`}>
                <h2>{post.node.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.node.content }}/>
              </div>
            );
          })}
        </div>
      </Container>
      </div>

    </div>
  );
};

export default About;
