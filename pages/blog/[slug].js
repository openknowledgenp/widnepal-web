import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router'
import { POSTS, POST_WITH_SLUG } from '../../graphql/blog.queries';
import Nav from '../../components/nav';

const BlogDetail = () => {
  const router = useRouter()
  const { slug } = router.query

  // Create a query hook
  const { data, loading, error } = useQuery(POST_WITH_SLUG(slug));
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  } else if (data.posts.edges.length === 0){
    return <p>Blog Not Found</p>
  }
  return (
    <div>
      <Head>
        <title>Blog - {post.node.title}</title>
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

export default BlogDetail;
