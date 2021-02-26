import { useQuery } from '@apollo/react-hooks';
import { EVENT_WITH_SLUG } from '../../../graphql/event.queries';
import { PageLayout } from '../../../components/pageLayout'
import { Loading } from '../../../components/loading'

const Event = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(EVENT_WITH_SLUG);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
    <PageLayout title="Woman in Data Conference: Title Goes Here">
      event detail
      {data.posts.edges.map(post => {
        return (
          <div key={`post__${post.node.id}`}>
            <h2>{post.node.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.node.content }}/>
          </div>
        );
      })}
    </PageLayout>
  );
};

export default Event;
