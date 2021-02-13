import { useQuery } from '@apollo/react-hooks';
import { POSTS, HEADER_DESCRIPTION } from '../../graphql/home.queries';
import { HomePageLayout } from '../../components/homePageLayout'
import {
  Button,
  Container,
} from 'semantic-ui-react'


const Home = () => {
  // Create a query hook
  const queryMultiple = () => {
    const data = useQuery(POSTS);
    const headerData = useQuery(HEADER_DESCRIPTION);
    return [data, headerData];
  }

  const [
      { loading: loading, data: data, error: error },
      { loading: headerLoading, data: headerData, error: headerError }
  ] = queryMultiple()

  if (loading || headerLoading) {
    return <p>Loading...</p>;
  }

  if (error || headerError) {
    return <p>Error: {JSON.stringify(error || headerError)}</p>;
  }

  return (
    <HomePageLayout data={headerData}>
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
