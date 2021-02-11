import { useQuery } from '@apollo/react-hooks';
import { POSTS } from '../../graphql/home.queries';
import { HomePageLayout } from '../../components/homePageLayout'
import {
  Button,
  Container,
} from 'semantic-ui-react'


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
    <HomePageLayout>
      home detail
      {data.posts.edges.map(post => {
        return (
          <div key={`post__${post.node.id}`}>
          <h2>{post.node.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.node.content }}/>
          </div>
        );
      })}
    </HomePageLayout>
  );
};

export default Home;
