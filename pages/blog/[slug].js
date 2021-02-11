import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router'
import { POSTS, POST_WITH_SLUG } from '../../graphql/blog.queries';
import { PageDetailLayout } from '../../components/pageLayout'

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

  const post = data.posts.edges[0]

  return (
    <PageDetailLayout title={post.node.title}>
        Blog: {post.node.title}
        <div key={`post__${post.node.id}`}>
          <h2>{post.node.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.node.content }}/>
        </div>
    </PageDetailLayout>
  );

};

export default BlogDetail;
