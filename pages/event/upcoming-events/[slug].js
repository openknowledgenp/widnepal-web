import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router'
import { EVENT_WITH_SLUG } from '../../../graphql/event.queries';
import { PageLayout } from '../../../components/pageLayout'
import { Loading } from '../../../components/loading'
import HeaderImg from '../../../assets/detail_img_header.svg'
import {
  Grid,
  Image,
} from 'semantic-ui-react';

const EventDetail = () => {
  const router = useRouter()
  const { slug } = router.query

  // Create a query hook
  const { data, loading, error } = useQuery(EVENT_WITH_SLUG(slug));
  if (loading) {
    return <Loading />;
  }

  console.log(data);

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  } else if (data.events.edges.length === 0){
    return <PageLayout title="Event: Not Found">
          <h2>The page you are looking for does not exist.</h2>
    </PageLayout>
  }

  const post = data.events.edges[0]
  return (
    <PageLayout title={post.node.title} format="eventread" headerImage={HeaderImg}>
        <Grid stackable className="event-read-screen" style={pageStyles.eventContainer}>
          <Grid.Row>
            <Grid.Column width={11}>
              {post.node.eventDetails.description !== null && post.node.eventDetails.description !== '' ?
                <div dangerouslySetInnerHTML={{ __html: post.node.eventDetails.description }} style={pageStyles.description}/>
                :
                <div style={pageStyles.description}>This event has no content.</div>
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </PageLayout>
  );

};

export default EventDetail;


const pageStyles = {
  description: {fontSize: 18, paddingTop:20, marginTop: 15},
  eventContainer: {paddingBottom: 80},
}
