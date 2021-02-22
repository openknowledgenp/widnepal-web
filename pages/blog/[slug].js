import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router'
import { BLOG_WITH_SLUG } from '../../graphql/blog.queries';
import { PageLayout } from '../../components/pageLayout'
import HeaderImg from '../../assets/blog_detail_img_header.svg'
import {SITE_PROTOCOL} from '../../assets/siteDetails'
import {
  Grid,
  Container,
  Image,
  List,
  Button,
  Icon
} from 'semantic-ui-react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton
} from "react-share";

const BlogDetail = ({host}) => {
  const router = useRouter()
  const { slug } = router.query

  // Create a query hook
  const { data, loading, error } = useQuery(BLOG_WITH_SLUG(slug));
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  } else if (data.blogs.edges.length === 0){
    return <PageLayout title="Blog: Not Found">
          <h2>The page you are looking for does not exist.</h2>
    </PageLayout>
  }

  const post = data.blogs.edges[0]
  console.log(post);

  let author =
    (post.node.featuredImage.node.author.node.firstName !== '' &&
    post.node.featuredImage.node.author.node.firstName !== null &&
    post.node.featuredImage.node.author.node.firstName !== undefined &&
    post.node.featuredImage.node.author.node.lastName !== '' &&
    post.node.featuredImage.node.author.node.lastName !== null &&
    post.node.featuredImage.node.author.node.lastName !== undefined)
    ?
    post.node.featuredImage.node.author.node.firstName + ' ' + post.node.featuredImage.node.author.node.lastName
    :
    'Author name is not available. (Update the user\'s first name and last name to get author\'s name)'

  let association =
    (post.node.featuredImage.node.author.node.description !== '' &&
    post.node.featuredImage.node.author.node.description !== null &&
    post.node.featuredImage.node.author.node.description !== undefined) ?
    post.node.featuredImage.node.author.node.description
    :
    'Author\'s association is not available. (Update the user\'s biographical info to get the author\'s association)'

  return (
    <PageLayout title={post.node.title} format="blogread" headerImage={HeaderImg}>
        <Grid stackable className="blog-read-screen">
          <Grid.Row>
            <Grid.Column width={11}>
              <List relaxed divided horizontal stackable>
                <List.Item width={5}>
                  {post.node.featuredImage.node.author.node.avatar && <Image avatar src={post.node.featuredImage.node.author.node.avatar.url} style={pageStyles.avatar} />}
                  <List.Content style={pageStyles.authorName}>
                    <List.Header>{author}</List.Header>
                    <List.Description>
                      {association}
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item width={5}>
                  <div style={pageStyles.postDate}>
                    <Icon link name='pencil square' />
                    July 20, 2019
                  </div>
                </List.Item>

                <List.Item width={5} style={pageStyles.socialMedia}>
                  <div><small>SHARE</small></div>
                  <br/>
                  <FacebookShareButton url={`${SITE_PROTOCOL}://${host}/blog/${slug}`}>
                    <Button circular color='facebook' icon='facebook' />
                  </FacebookShareButton>
                  <TwitterShareButton url={`${SITE_PROTOCOL}://${host}/blog/${slug}`}>
                    <Button circular color='twitter' icon='twitter' />
                  </TwitterShareButton>
                  <LinkedinShareButton url={`${SITE_PROTOCOL}://${host}/blog/${slug}`}>
                    <Button circular color='linkedin' icon='linkedin' />
                  </LinkedinShareButton>
                </List.Item>
              </List>

              <div dangerouslySetInnerHTML={{ __html: post.node.blogDetails.blog }} style={pageStyles.description}/>
            </Grid.Column>
            {/*<Grid.Column width={5}>
              side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar,
            </Grid.Column>*/}
          </Grid.Row>
        </Grid>
    </PageLayout>
  );

};

BlogDetail.getInitialProps = async ({req}) => {
  let host
  if (req) {
    host = req.headers.host
  } else {
    host = window.location.hostname
  }
  return { host: host }
}

export default BlogDetail;


const pageStyles = {
  postDate: { padding: 20 },
  authorName: {fontSize: 18, paddingRight: 20},
  avatar: {border: '2px solid #FCCA35', marginTop: 0, paddingTop: 0, height: 40, width: 40, marginRight: 10},
  description: {fontSize: 18, borderTop: '1px solid #0A0A0A',paddingTop:20, marginTop: 15},
  socialMedia: {position: 'absolute', float: 'right', right: 0, paddingRight: 20}
}
