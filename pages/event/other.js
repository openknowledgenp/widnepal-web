import { useQuery } from '@apollo/react-hooks';
import { EVENTS, EVENTS_ERROR_MESSAGES } from '../../graphql/event.queries';
import { PageLayout } from '../../components/pageLayout'
import { Loading } from '../../components/loading'
import { useRouter } from 'next/router'
import Truncate from 'react-truncate';

import {
  Grid,
} from 'semantic-ui-react';

const Event = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(EVENTS);
  const router = useRouter()
  const { page } = router.query

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  const OTHER_EVENT_PAGE = 'Other'
  const otherPageContents = data.events.edges.filter(post=>post.node.eventDetails.page===OTHER_EVENT_PAGE)
  const pageContent = otherPageContents.filter(post=>post.node.eventDetails.pageTitle===page)
  return (
    <PageLayout title={`Events | ${page}`}>
      <div>
      {pageContent.length ===0
        ?
        <h2>This page has no content.</h2>
        :
        pageContent.map((post,idx) => {
        let event_date = []
        if (post.node.eventDetails.startTime !== null) {
          event_date = post.node.eventDetails.startTime.split(' ').map(x=>x.split(','))
        }
        return (
          <div key={`post__${post.node.id}`} style={pageStyles.container}>
            <Grid stackable as="a" href={`/event/other/${post.node.slug}`}>
              <Grid.Row>
                {post.node.eventDetails.startTime !== null && <Grid.Column width={3}>
                  <div style={pageStyles.calendar(idx)}>
                    <div style={pageStyles.month}>{event_date[0][0]}</div>
                    <div style={pageStyles.date}>{event_date[1][0]}</div>
                    <div style={pageStyles.year}>{event_date[2][0]}</div>
                  </div>
                </Grid.Column>}
                <Grid.Column width={13}>
                  <div style={pageStyles.heading}>{post.node.eventDetails.title}</div>
                  <Truncate lines={4} ellipsis={<span>...</span>} style={pageStyles.description}>
                    <div dangerouslySetInnerHTML={{ __html: post.node.eventDetails.description }}/>
                  </Truncate>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        );
      })}
      </div>
    </PageLayout>
  );
};

export default Event;

const pageStyles={
  heading: {fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#000'},
  calendar: (idx)=>{
    return(
      {backgroundColor: idx%2!==0? '#1B9EFF':'#FCCA35', width:'100%', minWidth: 100, height:120, textAlign: 'center',padding:20, color: 'white'}
    )
  },
  month:{fontSize: 12, fontWeight: 'bold'},
  year:{fontSize: 18},
  date: {fontSize: 36, fontWeight: 'bold', padding: 10},
  description: {fontSize:17, color: '#18201E'},
  container: {paddingBottom:40, marginTop:40}
}
