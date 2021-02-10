import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import { POSTS } from '../../graphql/blog.queries';
import Nav from '../../components/nav';

const Blog = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(POSTS);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  const post = data.posts.edges[0]

  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <ul>
        {
          <div key={`post__${post.node.id}`}>
            <h2>{post.node.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.node.content }}/>
          </div>
        }
      </ul>
    </div>
  );
};

export default Blog;
