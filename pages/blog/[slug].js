import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router'
import { BLOG_WITH_SLUG } from '../../graphql/blog.queries';
import { PageLayout } from '../../components/pageLayout'
import { Loading } from '../../components/loading'
import HeaderImg from '../../assets/detail_img_header.svg'
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
const numberToMonth = {
0: "January",
1: "February",
2: "March",
3: "April",
4: "May",
5: "June",
6: "July",
7: "August",
8: "September",
9: "October",
10: "November",
11: "December",
}
const BlogDetail = ({host}) => {
  const router = useRouter()
  const { slug } = router.query

  // Create a query hook
  const { data, loading, error } = useQuery(BLOG_WITH_SLUG(slug));
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  } else if (data.blogs.edges.length === 0){
    return <PageLayout title="Blog: Not Found">
          <h2>The page you are looking for does not exist.</h2>
    </PageLayout>
  }

  const post = data.blogs.edges[0]

  let author = (post.node.lastEditedBy.node.firstName !== null && post.node.lastEditedBy.node.firstName !== null && post.node.lastEditedBy.node.lastName !== '' && post.node.lastEditedBy.node.lastName !== '') ?
    post.node.lastEditedBy.node.firstName + ' ' + post.node.lastEditedBy.node.lastName :
    'Author name is not mentioned.'

  let association = (post.node.lastEditedBy.node.user_organizational_association.organizationalAssociation !== null) ?
    post.node.lastEditedBy.node.user_organizational_association.organizationalAssociation :
    ''

  const dateRenderer = (post_date) => {
    let date = new Date(post_date)
    return (numberToMonth[date.getMonth()]) +' '+date.getDate()+', '+ date.getFullYear()
  }

  return (
    <PageLayout title={post.node.title} format="blogread" headerImage={HeaderImg}>
        <Grid stackable className="blog-read-screen">
          <Grid.Row>
            <Grid.Column width={11}>
              <List relaxed divided horizontal stackable>
                <List.Item width={5}>
                  {post.node.lastEditedBy.node.avatar !== null && <Image avatar src={post.node.lastEditedBy.node.avatar.url} style={pageStyles.avatar} />}
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
                    {
                    dateRenderer(post.node.date)
                    }
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

              {post.node.blogDetails.blog !== null && post.node.blogDetails.blog !== '' ?
                <div dangerouslySetInnerHTML={{ __html: post.node.blogDetails.blog }} style={pageStyles.description}/>
                :
                <div style={pageStyles.description}>This blog has no content.</div>
              }
            </Grid.Column>
            {/*<Grid.Column width={5}>
              side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar, side bar,
            </Grid.Column>*/}
          </Grid.Row>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
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
