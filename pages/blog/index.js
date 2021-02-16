import { useQuery } from '@apollo/react-hooks';
import { BLOGS, BLOGS_ERROR_MESSAGES } from '../../graphql/blog.queries';
import BlogPlaceholder from '../../assets/blog_placeholder_image.jpg';
import { PageLayout } from '../../components/pageLayout'
import {
  Button,
  Container,
  Grid,
  Image,
  Item
} from 'semantic-ui-react'

const Blog = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(BLOGS);
  let blogs
  let blogError

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  try {
    blogs = data.posts.edges
    blogError = false
    if (blogs.length === 0) {
      blogError = BLOGS_ERROR_MESSAGES.error
    }
  } catch (e) {
    blogError = BLOGS_ERROR_MESSAGES.error
  }

  return (
    <PageLayout title="Blogs">
      {blogError
        ?
        <div dangerouslySetInnerHTML={{ __html: blogError }}/>
        :
        <Item.Group style={pageStyles.section}>
          {data.posts.edges.map(post => {
            const postImage = post.node.postAttachedImage.image
            return (
                <Item as='a' style={pageStyles.item} key={`post__${post.node.id}`}>
                  <Item.Image size='medium' src={postImage !== null ? postImage.mediaItemUrl : BlogPlaceholder} />
                  <Item.Content style={pageStyles.content}>
                    <Item.Header style={pageStyles.header}>{post.node.title}</Item.Header>
                    <Item.Description style={pageStyles.description}>
                      <div dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                    </Item.Description>
                  </Item.Content>
                </Item>
            );
          })}
        </Item.Group>
      }
    </PageLayout>
  );

};

export default Blog;

const pageStyles = {
  section: { paddingTop: 80, paddingBottom: 80, width: '80%' },
  item: { borderBottom: '1px solid #0f46641f', paddingBottom: 30, marginBottom: 20 },
  content: {},
  header: {fontSize: 17},
  description: {fontSize: 16},
}
