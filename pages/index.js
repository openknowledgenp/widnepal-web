import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import { ALL_POSTS } from '../graphql/queries';
import Nav from '../components/nav';

const Home = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(ALL_POSTS);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
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
    </div>
  );
};

export default Home;
