import { useQuery } from '@apollo/react-hooks';
import { BLOGS, BLOGS_ERROR_MESSAGES } from '../../graphql/blog.queries';
import PlaceholderImage from '../../assets/placeholder_image.jpg';
import { PageLayout } from '../../components/pageLayout'
import { Loading } from '../../components/loading'
import {
  Image,
  Item
} from 'semantic-ui-react'
import Truncate from 'react-truncate';

const Blog = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(BLOGS);
  let blogs
  let blogError

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  try {
    blogs = data.blogs.edges
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
          {data.blogs.edges.map(blog => {
            const blogImage = blog.node.featuredImage
            return (
                <Item as='a' href={`/blog/${blog.node.slug}`} style={pageStyles.item} key={`blog__${blog.node.id}`}>
                  <Item.Image size='medium' src={blogImage !== null ? blogImage.node.mediaItemUrl : PlaceholderImage} />
                  <Item.Content style={pageStyles.content}>
                    <Item.Header style={pageStyles.header}>
                        {blog.node.title}
                    </Item.Header>
                    <Item.Description style={pageStyles.description}>
                      <Truncate lines={8} ellipsis={<span>...</span>}>
                        <div dangerouslySetInnerHTML={{ __html: blog.node.blogDetails.blog }}/>
                      </Truncate>
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
  section: { paddingTop: 40, paddingBottom: 40 },
  item: { borderBottom: '1px solid #0f46641f', paddingBottom: 70, marginBottom: 70 },
  content: {},
  header: {fontSize: 20},
  description: {fontSize: 16},
}
