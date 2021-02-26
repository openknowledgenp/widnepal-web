import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router'
import { EVENT_WITH_SLUG } from '../../../graphql/event.queries';
import { PageLayout } from '../../../components/pageLayout'
import { Loading } from '../../../components/loading'
import HeaderImg from '../../../assets/detail_img_header.svg'
import {
  Grid,
  Image,
  Button
} from 'semantic-ui-react';

const DAY_MAP = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
}

const ConferenceHero = ({post}) => {
  let event_date = []
  let dateValue
  if (post.node.eventDetails.startTime !== null) {
    event_date = post.node.eventDetails.startTime.split(' ').map(x=>x.split(','))
    dateValue = new Date(post.node.eventDetails.startTime)
  }
  return(
    <div style={pageStyles.conferenceHero}>
      <div><div style={pageStyles.titleBorderRight}><div style={pageStyles.titleBorderBottom}>
        <div style={pageStyles.boxLeft}/>
        <br/>
        <h1 style={pageStyles.categoryTitle}>WOMEN IN DATA CONFERENCE</h1>
        <h2>"Leverage the power of Women,<br/>Data and Technology"</h2>
        <div><Button color="blue">REGISTER HERE</Button></div>
        <br/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <div>WHEN</div>
              <br/>
              {post.node.eventDetails.startTime !== null &&
              <div>
                <div>
                  <b>
                  <span> {event_date[0][0]} </span>
                  <span>{event_date[1][0]}, </span>
                  <span>{event_date[2][0]} </span>
                  </b>
                </div>
                <div>
                  <b>
                  {DAY_MAP[dateValue.getDay()]}
                  </b>
                </div>
              </div>}
            </Grid.Column>
            <Grid.Column width={6}>
              <div>WHERE</div>
              <br/>
              <div>
                <b>
                  Zoom
                </b>
              </div>
            </Grid.Column>
            <Grid.Column width={5}>
              <div>SOCIAL</div>
              <br/>
              <div>
                <b>
                  #WOMENINDATA
                </b>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br/>
        <br/>
      </div></div></div>
    </div>
  )

}

const AboutEvent = ({post}) => {
  return(
    <div>
      <div style={pageStyles.subtitle}>About the Event </div>
      <div style={pageStyles.middleTitleUnderline}/>
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
    <div style={pageStyles.people}>
      <div><h3>Opening Remarks</h3></div>
      <br/>
      <Grid stackable >
        <Grid.Row>
          {['1','2','3','4'].map((x, idx)=>(
            <Grid.Column key={idx} width={4} style={pageStyles.peopleDetail}>
              <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.peopleImage}/>
              <b>Name</b>
              <div>Designation</div>
              <div>Representing</div>
            </Grid.Column>)
            )
          }
        </Grid.Row>
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <div><h3>Panel Discussion</h3></div>
      <br/>
      <Grid stackable >
        <Grid.Row>
          {['1','2','3','4'].map((x, idx)=>(
            <Grid.Column key={idx} width={4} style={pageStyles.peopleDetail}>
              <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.peopleImage}/>
              <b>Name</b>
              <div>Designation</div>
              <div>Representing</div>
            </Grid.Column>)
            )
          }
        </Grid.Row>
      </Grid>
    </div>
  )
}

const Organization = ({post}) => {
  return(
    <div style={pageStyles.organization}>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={8}>
            <div><h3>Organized By</h3></div>
            <br/>
            <Grid stackable >
              <Grid.Row>
                {['1','2'].map((x, idx)=>(
                  <Grid.Column key={idx} width={4} style={pageStyles.organizingMember}>
                    <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.orgImage}/>
                    <b>Name</b>
                  </Grid.Column>)
                  )
                }
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={8}>
            <div><h3>In partnership with</h3></div>
            <br/>
            <Grid stackable >
              <Grid.Row>
                {['1','2', '3', '4'].map((x, idx)=>(
                  <Grid.Column key={idx} width={4} style={pageStyles.organizingMember}>
                    <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.orgImage}/>
                    <b>Name</b>
                  </Grid.Column>)
                  )
                }
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

const Participants = ({post}) => {
  return(
    <div style={pageStyles.participants}>
      <div style={pageStyles.subtitle}>Who can participate</div>
      <br/>
      <br/>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
      </div>

    </div>
  )
}

const Supporters = ({post}) => {
  return(
    <div style={pageStyles.organization}>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={16}>
            <div><h3>Supported By</h3></div>
            <br/>
            <Grid stackable >
              <Grid.Row>
                {['1','2', '3'].map((x, idx)=>(
                  <Grid.Column key={idx} width={2} style={pageStyles.organizingMember}>
                    <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.orgImage}/>
                    <b>Name</b>
                  </Grid.Column>)
                  )
                }
              </Grid.Row>
            </Grid>
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
        <ConferenceHero {...{bgColor: 'rgba(252,202,53,0.91)', post, bgImageLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'}} />
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
  conferenceHero: {textAlign: 'center', padding: 50},
  description: {fontSize: 18, paddingTop:20, marginTop: 15, textAlign: 'center'},
  subtitle: {fontWeight: 'bold', fontSize: 26, marginTop: 40, textAlign: 'center'},
  middleTitleUnderline: { borderTop: '3px solid #403E3E', width: '100px', marginRight: 'auto', marginLeft: 'auto', marginTop: 15 },
  categoryTitle: {borderBottom: '4px solid #252323', width: 'fit-content', margin: 'auto', paddingBottom: 10},
  people: {marginRight:'auto',marginLeft:'auto',marginTop: 50, paddingTop: 80, paddingBottom: 80, fontSize: 18},
  organizingMember: {fontSize: 18, textAlign: 'center'},
  peopleDetail: {fontSize: 18, textAlign: 'center'},
  peopleImage: {width:200, height: 'auto', backgroundColor: 'grey', border: '1px solid #eee', margin:'auto'},
  orgImage: {width:200, height: 'auto', backgroundColor: 'grey', border: '1px solid #eee', margin:'auto'},
  organization: {marginTop: 80, marginBottom: 80},
  participants: {
    paddingTop: 10,
    paddingBottom: 80,
    textAlign: 'center',
    fontSize: 18
  },
  titleBorderRight: {
    backgroundClip: 'content-box',
    margin:'auto',
    width: '80%',
    borderRight: '10px solid white',
    borderImage: 'linear-gradient(to top, white 25%, rgba(0,0,0,0) 25%',
    borderImageSlice: 1,
  },
  titleBorderBottom: {
    backgroundClip: 'content-box',
    width: '100%',
    borderBottom: '10px solid white',
    borderImage: 'linear-gradient(to Right, rgba(0,0,0,0) 90%, white 90%, white 100%)',
    borderImageSlice: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 20,
  },
  boxLeft: {
    height: 100,
    float: 'left',
    width: 100,
    borderLeft: '10px solid white',
    borderTop: '10px solid white',
    position: 'relative',
    marginLeft: -30,
    marginTop: -30,
  }
}
