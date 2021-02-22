import { useQuery } from '@apollo/react-hooks';
import { POSTS } from '../../graphql/program.queries';
import { PageLayout } from '../../components/pageLayout'
import { Loading } from '../../components/loading'

const Program = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(POSTS);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return (
    <PageLayout title="Projects">
        projects detail
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

export default Program;
