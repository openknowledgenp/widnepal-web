import { useQuery } from '@apollo/react-hooks';
import { POSTS } from '../../graphql/blog.queries';
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
  const { data, loading, error } = useQuery(POSTS);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  const imageFile = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"

  return (
    <PageLayout title="Blogs">
        <Item.Group style={pageStyles.section}>
          {[1,2,3].map(x=><Item as='a' key={x} style={pageStyles.item}>
            <Item.Image size='medium' src={imageFile} />
            <Item.Content style={pageStyles.content}>
              <Item.Header style={pageStyles.header}>Announcing Open Data Day Nepal 2018, 3rd March, Patan Durbar Square and Museum</Item.Header>
              <Item.Description style={pageStyles.description}>
                Orion's sword worldlets a billion trillion not a sunrise but a galaxyrise rings of Uranus invent the universe not a sunrise but a galaxyrise preserve and cherish that pale blue dot. Network of wormholes the sky calls to us network of wormholes kindling the energy hidden
              </Item.Description>
            </Item.Content>
          </Item>)}
        </Item.Group>
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

export default Blog;

const pageStyles = {
  section: { paddingTop: 80, paddingBottom: 80, width: '80%' },
  item: { borderBottom: '1px solid #0f46641f', paddingBottom: 30, marginBottom: 20 },
  content: {},
  header: {fontSize: 17},
  description: {fontSize: 16},
}
