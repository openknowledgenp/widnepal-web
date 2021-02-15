import { useQuery } from '@apollo/react-hooks';
import {
  HEADER_DESCRIPTION,
  HEADER_MEDIA,
  ABOUT,
  ABOUT_MEDIA,
  MEMBER_ORGANIZATION_MEDIA,
  HEADER_MEDIA_ERROR_MESSAGES,
  ABOUT_ERROR_MESSAGES,
  ABOUT_MEDIA_ERROR_MESSAGES,
  MEMBER_ORGANIZATION_MEDIA_ERROR_MESSAGES,
} from '../../graphql/home.queries';
import { HomePageLayout } from '../../components/homePageLayout'
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Footer from '../../components/footer'

// import StaticTweet from '../../components/twitter/staticTweet'
import {
  Button,
  Container,
  Grid,
  Image,
  Item
} from 'semantic-ui-react'
import Truncate from 'react-truncate';

const AboutSection = ({title, content, mediaFileError, mediaFile}) => {
  return(
  <Grid divided='vertically' stackable style={pageStyles.section}>
    <Grid.Row columns={2}>
      <Grid.Column>
        <div style={pageStyles.content}>
          <h2 style={pageStyles.title}>{title}</h2>
          <br/>
          <div style={pageStyles.heroContainerDescription}>
            <div dangerouslySetInnerHTML={{ __html: content }}/>
          </div>
        </div>
      </Grid.Column>
      <Grid.Column only='tablet computer' style={pageStyles.imageWrapper}>
        {!mediaFileError
          ?
          <Image style={pageStyles.image} src={mediaFile}/>
          :
          <div dangerouslySetInnerHTML={{ __html: mediaFileError }}/>
        }
      </Grid.Column>
    </Grid.Row>
  </Grid>
)}

const MemberOrganization = ({memberOrgMedia, memberOrgMediaError}) => {
  return(
    <div style={pageStyles.section}>
      <Grid>
        <h2 style={{...pageStyles.title, ...pageStyles.middleTitle}}>Member Organization</h2>
        <div style={pageStyles.middleTitleUnderline}/>
      </Grid>
      {memberOrgMediaError
        ?
        <div dangerouslySetInnerHTML={{ __html: memberOrgMediaError }}/>
        :
        <Grid divided='vertically' stackable>
          <Grid.Row columns={memberOrgMedia.length}>
            {memberOrgMedia.map(img=>{return(
              <Button
                style={pageStyles.imageButton}
                key={img.mediaItemUrl}
                as="a"
                href={img.websiteAddress.websiteLink}
                icon={
                  <Image src={img.mediaItemUrl} style={pageStyles.memberOrgImage} key={img.mediaItemUrl}/>
                }
              />
            )})}
          </Grid.Row>
        </Grid>
      }

    </div>
  )
}

const UpcomingEventCarousel = () => {
  return(
    <div style={pageStyles.customCarousel.container}>
      <div style={pageStyles.customCarousel.headContainer}>
        <div style={pageStyles.customCarousel.head}>Upcoming Events</div>
        <div columns={2} style={pageStyles.customCarousel.post}>
          <div style={pageStyles.customCarousel.calendar}>
            <div style={pageStyles.customCarousel.date}>27</div>
            <div style={pageStyles.customCarousel.month}>March</div>
          </div>
          <div style={pageStyles.customCarousel.shortInfo}>
            <div style={pageStyles.customCarousel.title}>
              Women In Data Conference
            </div>
            <div style={pageStyles.customCarousel.description}>
              <Truncate lines={2} ellipsis={<span>...</span>}>
                  Women in Data Conference was organized with the theme where Women in Data Conference was organized with the theme where Women in Data Conference was organized with the theme where Women in Data Conference was organized with the theme where two superpowers meet
              </Truncate>
            </div>
          </div>
        </div>
        <div>
          {[1,2,3,4].map(x=> <Button {...{key:x, color:x===1?'blue':'grey'}} style={pageStyles.customCarousel.itemList}/>)}
        </div>
      </div>
      <div style={pageStyles.customCarousel.shape}/>
    </div>
  )
}
const UpcomingEvent = () => {
  const imageFile = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
  return(
    <Grid divided='vertically' stackable style={pageStyles.sectionNoUpperPadding}>
      <Grid.Row columns={2} style={pageStyles.upcomingEventBrief}>
        <Grid.Column style={pageStyles.upcomingEventPicture(imageFile)} only='tablet computer'/>
        <Grid.Column style={pageStyles.upcomingEventDetail}>
          <div style={pageStyles.inTheSpot}>In the spotlight:</div>
          <div style={pageStyles.eventTitle}>Open Data Fellowship for Women</div>
          <div style={pageStyles.eventDescription}>
            "Open Data Fellowship - Women Edition" is an initiative of Open Knowledge Nepal. The main motive behind the fellowship is to increase the number of women leaders in the field of open data in Nepal and use the existing expertise of different organizations to provide a good exposure to women and equip them with valuable work experience, confidence and skills that will help them to better understand the data ecosystem and potential opportunities.
          </div>
          <div style={pageStyles.eventReadMore}>
            <Button style={pageStyles.eventReadMoreBtn}>Read more</Button>
            <div style={pageStyles.eventDetailCarousel}>
              {[1,2,3,4].map(x=> <Button {...{key:x, color:x===1?'blue':'grey'}} style={pageStyles.customCarousel.itemList}/>)}
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

const OtherMedia = () => {
  return(
    <Grid divided='vertically' stackable style={pageStyles.sectionNoUpperPadding}>
      <Grid.Row columns={2}>
        <Grid.Column>
          <div style={pageStyles.otherMediaTitle}>
            Useful Resources
          </div>
          <Item.Group>
            {[1,2,3].map(x=><Item as='a' key={x}>
              <Item.Content style={pageStyles.usefulResourceItem}>
                <Item.Header style={pageStyles.usefulResourceHead}>Open Data Curriculum</Item.Header>
                <Item.Description style={pageStyles.usefulResourceDescription}>
                  Open Knowledge Nepal: The Open Data Manual accompanies the Open Data Curriculum, and provides information on the basics of open data, with a list of helpful resources for the readers to refer to. To learn more  please  go to link: http://odap.oknp.org
                </Item.Description>
              </Item.Content>
            </Item>)}
          </Item.Group>
        </Grid.Column>
        <Grid.Column>
          {/*<div style={pageStyles.otherMediaTitle}>
          Twitter
          </div>*/}
          <TwitterTimelineEmbed
             sourceType="profile"
             screenName="okfn_np"
             options={{height: 500}}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

const JoinUs = () => {
  return(
    <div style={pageStyles.section}>
      <div style={pageStyles.joinUsInfo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </div>
      <Button color="blue">
        Join Today
      </Button>
    </div>
  )
}

const Home = () => {
  // Create a query hook
  const [
      { loading: headerLoading, data: headerData, error: headerError },
      { loading: headerMediaLoading, data: headerMediaData, error: headerMediaError },
      { loading: aboutLoading, data: aboutData, error: aboutError },
      { loading: aboutMediaLoading, data: aboutMediaData, error: aboutMediaError },
      { loading: memberMediaLoading, data: memberMediaData, error: memberMediaError },
  ] = [
    useQuery(HEADER_DESCRIPTION), useQuery(HEADER_MEDIA), useQuery(ABOUT),
    useQuery(ABOUT_MEDIA), useQuery(MEMBER_ORGANIZATION_MEDIA)
  ]

  if (aboutLoading || headerLoading || headerMediaLoading ||
    aboutMediaLoading || memberMediaLoading)
    return <p>Loading...</p>
  if (aboutError || headerError || headerMediaError ||
    aboutMediaError || memberMediaError)
    return <p>Error: {JSON.stringify(aboutError || headerError || headerMediaError || memberMediaError)}</p>

  let
    title, content,
    headerImage, headerImageError,
    mediaFile, mediaFileError,
    memberOrgMedia, memberOrgMediaError

  try {
    title = aboutData.posts.edges[0].node.title;
    content = aboutData.posts.edges[0].node.content;
  } catch (e) {
    title = ABOUT_ERROR_MESSAGES.errorTitle;
    content = ABOUT_ERROR_MESSAGES.errorDescription;
  }

  try {
    headerImage = headerMediaData.mediaItems.nodes[0].mediaItemUrl
    headerImageError = false
  } catch (e) {
    headerImageError = HEADER_MEDIA_ERROR_MESSAGES.error
  }

  try {
    mediaFile = aboutMediaData.mediaItems.nodes[0].mediaItemUrl
    mediaFileError = false
  } catch (e) {
    mediaFileError = ABOUT_MEDIA_ERROR_MESSAGES.error
  }

  try {
    memberOrgMedia = memberMediaData.mediaItems.nodes
    memberOrgMediaError = false
    if (memberOrgMedia.length === 0) {
      memberOrgMediaError = MEMBER_ORGANIZATION_MEDIA_ERROR_MESSAGES.error
    }
  } catch (e) {
    memberOrgMediaError = MEMBER_ORGANIZATION_MEDIA_ERROR_MESSAGES.error
  }

  return (
    <HomePageLayout {...{headerData, headerImage, headerImageError}}>
        <AboutSection {...{title, content, mediaFileError, mediaFile, bgColor: 'white'}}/>
        <MemberOrganization {...{memberOrgMedia, memberOrgMediaError, bgColor: "#f7f7f7"}}/>
        <UpcomingEventCarousel {...{bgColor: '#F2F2F2', bgSize: '40%'}}/>
        <UpcomingEvent {...{}}/>
        <OtherMedia/>
        <JoinUs {...{bgColor: '#F7F7F7'}}/>
        <Footer {...{bgColor: '#282828'}}/>
    </HomePageLayout>
  );
};

export default Home;

const pageStyles = {
  section: { paddingTop: 80, paddingBottom: 80 },
  sectionNoUpperPadding: { paddingBottom: 80, clear: 'both' },
  title: { fontSize: 28, color: '#403E3E' },
  middleTitle: {width: '100%', textAlign: 'center'},
  middleTitleUnderline: { borderTop: '3px solid #403E3E', width: '60px', margin: 'auto', paddingBottom: 30 },
  memberOrgImage: {maxWidth: '200px', maxHeight: '145px'},
  imageButton: {backgroundColor: '#efefef', padding: 1, margin: 'auto'},
  content: { fontSize: 18 },
  image: { margin: 'auto', boxShadow: '15px -15px #FCCA35', width: '70%' },
  imageWrapper: { paddingTop: 35, paddingRight: 15, height: '100%', },

  customCarousel: {
    container: { marginTop: 70, marginBottom: 50 },
    headContainer: {
      backgroundColor: '#F2F2F2',
      height: 150,
      width: '60%',
      float: 'left',
      padding: 20,
      overflow: 'hidden',
    },
    shape: {
      width: 0,
      backgroundColor: '#F2F2F2',
      position: 'relative',
      marginLeft: '60%',
      borderRight: 'solid 30px white',
      borderBottom: 'solid 75px transparent',
      borderTop: 'solid 75px transparent',
    },
    head: {
      fontWeight: 'bold',
      fontSize: 20
    },
    post: {
      marginTop: 20,
      fontSize: 16
    },
    calendar: {
      backgroundColor: '#1B9EFF',
      textAlign: 'center',
      fontWeight: 'bold',
      float: 'left',
      width: 'fit-content',
      padding: 15,
      paddingBottom: 8,
      marginRight: 20,
    },
    date: {
      color: 'white',
      fontSize: 32,
    },
    month: {
      color: 'white',
      fontSize: 14,
      paddingTop: 5
    },
    shortInfo: {
    },
    title: {
      color: '#1B9EFF',
      fontWeight: 'bold',
      fontSize: 18,
    },
    description: {
      fontSize: 16,
      paddingTop: 10,
      overflow: 'hidden'
    },
    itemList: {
      margin:0, padding:0, minHeight: 6, height: 6, width: 6, borderRadius: 3, border: 'none', marginLeft: 10
    }
  },

  upcomingEventBrief: {
    height: 450,
  },
  upcomingEventDetail: {
    backgroundColor: '#FCCA35',
    height: '100%',
  },
  upcomingEventPicture: (imageFile) => {return({
    paddingRight:0,
    height: '100%',
    backgroundImage: `url(${imageFile})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#1B9EFF'
  })},
  inTheSpot: {
    paddingTop: 30,
    paddingLeft: 40,
    fontSize: 14,
  },
  eventTitle: {
    fontSize: 24,
    fontWeignt: 'bold',
    width: '80%',
    marginTop: 15,
    paddingRight: 40,
    paddingLeft: 40,
  },
  eventDescription: {
    marginTop: 15,
    fontSize: 16,
    height: '55%',
    overflowY: 'auto',
    paddingRight: 40,
    paddingLeft: 40,
  },
  eventReadMore: {
    fontSize: 16,
    position:'absolute',
    bottom: 15,
    borderTop: '1px solid black',
    width: '80%',
    marginRight: 40,
    marginLeft: 40,
    paddingTop: 5,
  },
  eventReadMoreBtn: {
    backgroundColor: 'rgba(0,0,0,0)',
    margin: 0,
    paddingLeft: 0,
    paddingTop: 5,
    paddingBottom: 0,
    border: 'none',
    color: 'black',
    float: 'left',
  },
  eventDetailCarousel: {
    float: 'right',
  },
  otherMediaTitle: {
    // fontWeight: 'bold',
    // fontSize: 20,
    // borderBottom: '1px solid #000000aa',
    // paddingBottom: 5,
    fontSize: 27,
    lineHeight: '36px',
    fontWeight: 300,
    paddingBottom: 10,
    paddingTop: 10,
    borderBottom: '1px solid #0f46641f',
  },
  usefulResourceItem: {
    paddingBottom: 10,
    borderBottom: '1px solid #ddd'
  },
  usefulResourceHead: {
    fontSize: 17,
  },
  usefulResourceDescription: {
    fontSize: 16,
  },
  joinUsInfo: {
    fontSize: 18,
    float: 'left',
    width: '70%',
    paddingRight: 30
  },
}
