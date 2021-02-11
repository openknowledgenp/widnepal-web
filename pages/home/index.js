import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import { POSTS } from '../../graphql/home.queries';
import Nav from '../../components/nav';
import GraphicsElement from '../../components/graphicsElement'
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
    height: 400, // If you change this value, also change the value of background in components/anumDependencies at line 21 > webGLRenderer.setSize(window.innerWidth, 400);
  },
  heroContainer: { position: 'relative', zIndex: 2 },
  pageContainer: { marginTop: 330 },
  heroContainerHead: { color: 'white', fontSize: '3em', fontWeight: 'bold' },
  heroContainerDescription: { color: 'white', fontSize: '1.45em', fontWeight: 300, paddingTop: '15px' },
}

const Home = () => {
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
      <Nav isHomePage/>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={pageStyles.hero}>
        <GraphicsElement />
        <Container style={pageStyles.heroContainer}>
            <div>
              <h1 style={pageStyles.heroContainerHead}>WOMEN IN DATA</h1>
              <p style={pageStyles.heroContainerDescription}>We provide a platform for female and gender<br/>
              diverse data professionals to share their technical<br/>
              knowledge, do something</p>
              <Button color="yellow">Why should I take a part?</Button>
            </div>

        </Container>
      </div>
      <Container style={pageStyles.pageContainer}>
      <ul>
      {data.posts.edges.map(post => {
        return (
          <div key={`post__${post.node.id}`}>
          <h2>{post.node.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.node.content }}/>
          </div>
        );
      })}
      </ul>
      </Container>
    </div>
  );
};

export default Home;
