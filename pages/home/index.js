import React from 'react';
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
import { EVENTS, EVENTS_ERROR_MESSAGES } from '../../graphql/event.queries';
import { RESOURCES, RESOURCES_ERROR_MESSAGES } from '../../graphql/resources.queries';
import { BLOGS, BLOGS_ERROR_MESSAGES } from '../../graphql/blog.queries';
import { HomePageLayout } from '../../components/homePageLayout'
import { TwitterTimelineEmbed } from "react-twitter-embed";
import PlaceholderImage from '../../assets/placeholder_image.jpg';

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
        <Grid divided='vertically' stackable style={pageStyles.memberOrganization}>
          <Grid.Row columns={memberOrgMedia.length}>
            {memberOrgMedia.map(img=>{return(
              <Button
                style={pageStyles.imageButton}
                key={img.mediaItemUrl}
                as="a"
                href={img.websiteLink.websiteLink}
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

const UpcomingEventCarousel = ({eventErr, pinnedEvents, selected_event, setSelectedEvent}) => {
  let event_date = []
  if (pinnedEvents[selected_event].node.eventDetails.startTime !== null) {
    event_date = pinnedEvents[selected_event].node.eventDetails.startTime.split(',')[0].split(' ')
  }
  return(
    <div style={pageStyles.customCarousel.container}>
      <div style={pageStyles.customCarousel.headContainer}>
        <div style={pageStyles.customCarousel.head}>Upcoming Events</div>
          {eventErr
          ?
          <div dangerouslySetInnerHTML={{ __html: eventErr }}/>
          :
          <Grid.Row as="a" href={`/event/upcoming-events/${pinnedEvents[selected_event].node.slug}`} columns={2} style={pageStyles.customCarousel.post}>
            {event_date.length > 0 ?
              <div style={pageStyles.customCarousel.calendar}>
                <div style={pageStyles.customCarousel.date}>{event_date[1]}</div>
                <div style={pageStyles.customCarousel.month}>{event_date[0]}</div>
              </div>
              :
              <div style={pageStyles.customCarousel.calendar}/>
            }
            <div style={pageStyles.customCarousel.shortInfo}>
              <div style={pageStyles.customCarousel.title}>
                <Truncate lines={1} ellipsis={<span>...</span>}>
                    {pinnedEvents[selected_event].node.title}
                </Truncate>
              </div>
              <div style={pageStyles.customCarousel.description}>
                <Truncate lines={2} ellipsis={<span style={{ fontWeight: 'bold' }}>... Read More</span>}>
                  <span dangerouslySetInnerHTML={{ __html: pinnedEvents[selected_event].node.eventDetails.description }}/>
                  <span style={{ fontWeight: 'bold' }}>
                  ... Read More
                  </span>
                </Truncate>
              </div>
            </div>
          </Grid.Row>}
        <div style={pageStyles.customCarousel.buttons}>
          {pinnedEvents.map((event, idx)=> <Button {...{key:idx, color:selected_event===idx?'blue':'grey'}} onClick={()=>setSelectedEvent(idx)} style={pageStyles.customCarousel.itemList}/>)}
        </div>
      </div>
      <div style={pageStyles.customCarousel.shape}/>
    </div>
  )
}
const PinnedBlogs = ({ blogErr, pinnedBlogs, selected_blog, setSelectedBlog}) => {
  let imageFile = PlaceholderImage
  try {
    imageFile = pinnedBlogs[selected_blog].node.featuredImage.node.mediaItemUrl
  } catch (e) {
    imageFile = PlaceholderImage
  }

  return(
    <Grid divided='vertically' stackable style={pageStyles.sectionNoUpperPadding}>
      <Grid.Row columns={2} style={pageStyles.pinnedBlogContent}>
        <Grid.Column style={pageStyles.pinnedBlogPicture(imageFile)} only='tablet computer'/>
        {blogErr
          ?
          <Grid.Column style={pageStyles.pinnedBlogDetail}>
            <div dangerouslySetInnerHTML={{ __html: blogErr }}/>
          </Grid.Column>
          :
          <Grid.Column style={pageStyles.pinnedBlogDetail}>
              <div style={pageStyles.inTheSpot}>In the spotlight:</div>
              <div style={pageStyles.contentTitle}>{pinnedBlogs[selected_blog].node.title}</div>
              <div style={pageStyles.mainContent}>
                <div dangerouslySetInnerHTML={{ __html: pinnedBlogs[selected_blog].node.blogDetails.blog }} />
              </div>
              <div style={pageStyles.blogReadMore}>
                <Button style={pageStyles.blogReadMoreBtn} as="a" href={`/blog/${pinnedBlogs[selected_blog].node.slug}`}>Read more</Button>
                <div style={pageStyles.detailCarousel}>
                  {pinnedBlogs.map((event, idx)=> <Button {...{key:idx, color:selected_blog===idx?'blue':'grey'}} onClick={()=>setSelectedBlog(idx)} style={pageStyles.customCarousel.itemList}/>)}
                </div>
              </div>
          </Grid.Column>
        }
      </Grid.Row>
    </Grid>
  )
}

const OtherMedia = ({resourceErr, pinnedResources}) => {
  return(
    <Grid divided='vertically' stackable style={pageStyles.sectionNoUpperPadding}>
      <Grid.Row columns={2}>
        <Grid.Column>
          <div style={pageStyles.otherMediaTitle}>
            Useful Resources
          </div>
          <Item.Group>
            {resourceErr ?
              <div dangerouslySetInnerHTML={{ __html: resourceErr }}/>
              :
              pinnedResources.map((resource, idx)=><Item as='a' key={idx} href={`/resources/${pinnedResources[idx].node.slug}`}>
              <Item.Content style={pageStyles.usefulResourceItem}>
                <Item.Header style={pageStyles.usefulResourceHead}>{resource.node.title}</Item.Header>
                <Item.Description style={pageStyles.usefulResourceDescription}>
                  <Truncate lines={5} ellipsis={<span>...</span>}>
                      <div dangerouslySetInnerHTML={{ __html: resource.node.resourceDetails.description }}/>
                  </Truncate>
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
  const [selected_event, setSelectedEvent] = React.useState(undefined);
  const [selected_blog, setSelectedBlog] = React.useState(undefined);

  const [
      { loading: headerLoading, data: headerData, error: headerError },
      { loading: headerMediaLoading, data: headerMediaData, error: headerMediaError },
      { loading: aboutLoading, data: aboutData, error: aboutError },
      { loading: aboutMediaLoading, data: aboutMediaData, error: aboutMediaError },
      { loading: memberMediaLoading, data: memberMediaData, error: memberMediaError },
      { loading: eventsLoading, data: eventsData, error: eventsError },
      { loading: resourcesLoading, data: resourcesData, error: resourcesError },
      { loading: blogsLoading, data: blogsData, error: blogsError },
  ] = [
    useQuery(HEADER_DESCRIPTION), useQuery(HEADER_MEDIA), useQuery(ABOUT),
    useQuery(ABOUT_MEDIA), useQuery(MEMBER_ORGANIZATION_MEDIA), useQuery(EVENTS),
    useQuery(RESOURCES), useQuery(BLOGS)
  ]

  if (aboutLoading || headerLoading || headerMediaLoading ||
    aboutMediaLoading || memberMediaLoading || eventsLoading ||
    resourcesLoading || blogsLoading
  ) return <p>Loading...</p>

  if (aboutError || headerError || headerMediaError ||
    aboutMediaError || memberMediaError || eventsError ||
    resourcesError || blogsError
  ) return <p>Error: {JSON.stringify(aboutError || headerError || headerMediaError || memberMediaError || eventsError || resourcesError || blogsError)}</p>

  let
    title, content,
    headerImage, headerImageError,
    mediaFile, mediaFileError,
    memberOrgMedia, memberOrgMediaError,
    pinnedEvents, eventErr,
    pinnedResources, resourceErr,
    pinnedBlogs, blogErr

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

  try {
    pinnedEvents = eventsData.events.edges.filter(evt=>evt.node.eventDetails.isPinned)
    if (pinnedEvents.length > 0 && selected_event === undefined) {
      eventErr = false
      setSelectedEvent(0)
    }
    if (pinnedEvents.length === 0) {
      eventErr = EVENTS_ERROR_MESSAGES.error
    }
  } catch (e) {
    eventErr = EVENTS_ERROR_MESSAGES.error
  }

  try {
    pinnedEvents = eventsData.events.edges.filter(evt=>evt.node.eventDetails.isPinned)
    if (pinnedEvents.length > 0 && selected_blog === undefined) {
      eventErr = false
      setSelectedBlog(0)
    }
    if (pinnedEvents.length === 0) {
      eventErr = EVENTS_ERROR_MESSAGES.error
    }
  } catch (e) {
    eventErr = EVENTS_ERROR_MESSAGES.error
  }

  try {
    pinnedResources = resourcesData.resources.edges.filter(evt=>evt.node.resourceDetails.isPinned)
    if (pinnedResources.length > 0) {
      resourceErr = false
    }
    if (pinnedResources.length === 0) {
      resourceErr = RESOURCES_ERROR_MESSAGES.error
    }
  } catch (e) {
    resourceErr = RESOURCES_ERROR_MESSAGES.error
  }

  try {
    pinnedBlogs = blogsData.blogs.edges.filter(evt=>evt.node.blogDetails.isPinned)
    if (pinnedBlogs.length > 0) {
      blogErr = false
    }
    if (pinnedBlogs.length === 0) {
      blogErr = BLOGS_ERROR_MESSAGES.error
    }
  } catch (e) {
    blogErr = BLOGS_ERROR_MESSAGES.error
  }

  return (
    <HomePageLayout {...{headerData, headerImage, headerImageError}}>
        <AboutSection {...{title, content, mediaFileError, mediaFile, bgColor: 'white'}}/>
        <MemberOrganization {...{memberOrgMedia, memberOrgMediaError, bgColor: "#f7f7f7"}}/>
        <UpcomingEventCarousel {...{eventErr, selected_event, setSelectedEvent, pinnedEvents, bgColor: '#F2F2F2', bgSize: '40%'}}/>
        <PinnedBlogs {...{blogErr, pinnedBlogs, selected_blog, setSelectedBlog}}/>
        <OtherMedia {...{resourceErr, pinnedResources}}/>
        <JoinUs {...{bgColor: '#F7F7F7'}}/>
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
      fontSize: 20,
      paddingBottom: 15
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
      minHeight: 50
    },
    date: {
      color: 'white',
      fontSize: 32,
    },
    month: {
      color: 'white',
      fontSize: 12,
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
      overflow: 'hidden',
      color: '#403E3E',
    },
    itemList: {
      margin:0, padding:0, minHeight: 6, height: 6, width: 6, borderRadius: 3, border: 'none', marginLeft: 10
    },
    buttons: {
      clear: 'both',
    },
  },

  memberOrganization: {
    paddingRight: 80,
    paddingLeft: 80,
  },

  pinnedBlogContent: {
    height: 450,
  },
  pinnedBlogDetail: {
    backgroundColor: '#FCCA35',
    height: '100%',
  },
  pinnedBlogPicture: (imageFile) => {return({
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
  contentTitle: {
    fontSize: 24,
    fontWeignt: 'bold',
    width: '80%',
    marginTop: 15,
    paddingRight: 40,
    paddingLeft: 40,
  },
  mainContent: {
    marginTop: 15,
    fontSize: 16,
    height: '55%',
    overflowY: 'auto',
    paddingRight: 40,
    paddingLeft: 40,
  },
  blogReadMore: {
    fontSize: 16,
    position:'absolute',
    bottom: 15,
    borderTop: '1px solid black',
    width: '80%',
    marginRight: 40,
    marginLeft: 40,
    paddingTop: 5,
  },
  blogReadMoreBtn: {
    backgroundColor: 'rgba(0,0,0,0)',
    margin: 0,
    paddingLeft: 0,
    paddingTop: 5,
    paddingBottom: 0,
    border: 'none',
    color: 'black',
    float: 'left',
  },
  detailCarousel: {
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
