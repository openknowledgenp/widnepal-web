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

const ConferenceHero = ({post}) => {
  let event_date = []
  if (post.node.eventDetails.startTime !== null) {
    event_date = post.node.eventDetails.startTime.split(' ').map(x=>x.split(','))
  }
  return(
    <div style={pageStyles.conferenceHero}>
        {post.node.eventDetails.startTime !== null &&
        <div>
          <div>
            <b>Event On:</b>
            <span> {event_date[0][0]} </span>
            <span>{event_date[1][0]}, </span>
            <span>{event_date[2][0]} </span>
          </div>
          <hr/>
        </div>}
    </div>
  )

}

const AboutEvent = ({post}) => {
  return(
    <div>
        {post.node.eventDetails.description !== null && post.node.eventDetails.description !== '' ?
          <div dangerouslySetInnerHTML={{ __html: post.node.eventDetails.description }} style={pageStyles.description}/>
          :
          <div style={pageStyles.description}>This event has no content.</div>
        }
    </div>
  )
}

const People = ({post}) => {
  return(
    <div>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={11}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

const Organization = ({post}) => {
  return(
    <div>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={11}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

const Participants = ({post}) => {
  return(
    <div>Participants</div>
  )
}

const Supporters = ({post}) => {
  return(
    <div>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={11}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}


const EventDetail = () => {
  const router = useRouter()
  const { slug } = router.query

  // Create a query hook
  const { data, loading, error } = useQuery(EVENT_WITH_SLUG(slug));
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  } else if (data.events.edges.length === 0){
    return <PageLayout title="Event: Not Found">
          <h2>The page you are looking for does not exist.</h2>
    </PageLayout>
  }

  const post = data.events.edges[0]

  return (
    <PageLayout title={post.node.eventDetails.title} format="conferenceread" headerImage={HeaderImg} noHero>
        <ConferenceHero {...{bgColor: '#FCCA35', post}} />
        <AboutEvent {...{post}}/>
        <People {...{bgColor:'#F7F7F7',post}}/>
        <Organization {...{post}}/>
        <Participants {...{bgColor:'#F5BA00', post}}/>
        <Supporters {...{post}}/>

    </PageLayout>
  );

};

export default EventDetail;


const pageStyles = {
  conferenceHero: {height: 400, backgroundColor: 'grey'},
  description: {fontSize: 18, paddingTop:20, marginTop: 15},
}
