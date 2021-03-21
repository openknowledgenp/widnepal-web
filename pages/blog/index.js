import { useQuery } from '@apollo/react-hooks';
import { BLOGS, BLOGS_ERROR_MESSAGES } from '../../graphql/blog.queries';
import PlaceholderImage from '../../assets/placeholder_image.jpg';
import { PageLayout } from '../../components/pageLayout'
import { Loading } from '../../components/loading'
import {
  Image,
  Item,
  Pagination
} from 'semantic-ui-react'
import Truncate from 'react-truncate';
import React from 'react';


const Blog = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(BLOGS);
  const [page, setPage] = React.useState(1);

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

  let blogsList = []
  const ITEMS_PER_PAGE = 10
  const totalPages = parseInt(data.blogs.edges.length / ITEMS_PER_PAGE) + ((data.blogs.edges.length % ITEMS_PER_PAGE) > 0 ? 1:0)
  if (data.blogs.edges && data.blogs.edges.length > 0) {
    let startingPoint = (page - 1) * ITEMS_PER_PAGE
    let endingPoint = ((data.blogs.edges.length-1) < page * ITEMS_PER_PAGE) ? ((page*ITEMS_PER_PAGE) -  (page *ITEMS_PER_PAGE - (data.blogs.edges.length))) : page *ITEMS_PER_PAGE
    for (var i = startingPoint; i < endingPoint; i++) {
      blogsList.push(data.blogs.edges[i])
    }
  }
  const handlePaginationChange = (e, { activePage }) => setPage(activePage)


  return (
    <PageLayout title="Blogs">
      {blogError
        ?
        <div dangerouslySetInnerHTML={{ __html: blogError }}/>
        :
        <Item.Group style={pageStyles.section}>
          {blogsList.map(blog => {
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
          <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={'...'}
            firstItem={null}
            lastItem={null}
            siblingRange={3}
            totalPages={totalPages}
            onPageChange={handlePaginationChange}
          />
        </Item.Group>
      }

    </PageLayout>
  );

};

export default Blog;

const FONT_SIZE = 17
const pageStyles = {
  section: { paddingTop: 40 },
  item: { borderBottom: '1px solid #0f46641f', paddingBottom: 70, marginBottom: 70 },
  content: {},
  header: {fontSize: 20},
  description: {fontSize: FONT_SIZE},
}
