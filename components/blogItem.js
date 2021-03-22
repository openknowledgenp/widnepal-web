import { useQuery } from '@apollo/react-hooks';
import PlaceholderImage from '../assets/placeholder_image.jpg';
import {
  Image,
  Item,
  Pagination
} from 'semantic-ui-react'
import Truncate from 'react-truncate';
import TagsAndCategories from './tagsAndCategories'

const BlogItem = ({blog}) => {
  const blogImage = blog.node.featuredImage
  return(
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
      <TagsAndCategories blog={blog}/>
    </Item.Content>
    </Item>
  )
}

export default BlogItem

const FONT_SIZE = 17
const pageStyles = {
  item: { borderBottom: '1px solid #0f46641f', paddingBottom: 70, marginBottom: 70 },
  content: {},
  header: {fontSize: 20},
  description: {fontSize: FONT_SIZE},
}
