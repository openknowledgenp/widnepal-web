import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
  HOMEPAGE_DETAIL,
  HOMEPAGE_CONTENT_MAP
} from '../../graphql/home.queries';
import { EVENTS, EVENTS_ERROR_MESSAGES } from '../../graphql/event.queries';
import { RESOURCES, RESOURCES_ERROR_MESSAGES } from '../../graphql/resources.queries';
import { BLOGS, BLOGS_ERROR_MESSAGES } from '../../graphql/blog.queries';
import { HomePageLayout } from '../../components/homePageLayout'
import PlaceholderImage from '../../assets/placeholder_image.jpg';
import { Loading } from '../../components/loading'
import { getTweets } from "../../components/networking/tweets"
import  { useState } from 'react';
import Tweet from 'react-tweet'
import {
  Button,
  Container,
  Grid,
  Image,
  Item
} from 'semantic-ui-react'
import Truncate from 'react-truncate';

const AboutSection = ({resultObject, errorReport}) => {
  const content = {data: resultObject['aboutUs'], errStatus: errorReport['aboutUsHasError']}
  const bannerImage = {data: resultObject['aboutUsBannerImage'], errStatus: errorReport['aboutUsBannerImageHasError']}
  const renderHTML = (data) => <div dangerouslySetInnerHTML={{ __html: data }}/>
  return(
  <Grid divided='vertically' stackable style={pageStyles.section}>
    <Grid.Row columns={2}>
      <Grid.Column style={{ display: 'flex', margin: 'auto'}}>
        <div style={pageStyles.content}>
          <h2 style={pageStyles.title}>About Us</h2>
          <div style={pageStyles.heroContainerDescription}>
            {renderHTML(content.data)}
          </div>
        </div>
      </Grid.Column>
      <Grid.Column only='tablet computer' style={pageStyles.imageWrapper}>
        <br/>
        <br/>
        {bannerImage.errStatus
          ?
          renderHTML(bannerImage.data)
          :
          <Image style={pageStyles.image} src={bannerImage.data.mediaItemUrl}/>
        }
      </Grid.Column>
    </Grid.Row>
  </Grid>
)}

const getSortIndices = (test) => {
  var len = test.length;
  var indices = new Array(len);
  for (var i = 0; i < len; ++i) indices[i] = i;
  indices.sort(function (a, b) { return test[a] < test[b] ? -1 : test[a] > test[b] ? 1 : 0; });
  return indices
}

const MemberOrganization = ({resultObject, errorReport}) => {
  const memberOrgs = {data: resultObject['addMemberOrganizations'], errStatus: errorReport['addMemberOrganizationsHasError']}
  const renderHTML = (data) => <div dangerouslySetInnerHTML={{ __html: data }}/>

  const indices = getSortIndices(memberOrgs.data.map(item=>item.name))

  return(
    <div style={pageStyles.section}>
      <Grid>
        <h2 style={{...pageStyles.title, ...pageStyles.middleTitle}}>Member Organizations</h2>
        <div style={pageStyles.middleTitleUnderline}/>
      </Grid>
      {memberOrgs.errStatus ?
        renderHTML(memberOrgs.data)
        :
        <Grid divided='vertically' stackable style={pageStyles.memberOrganization}>
          <Grid.Row columns={memberOrgs.length}>
            {memberOrgs.data.map((x,idx)=>{
              const position = indices.indexOf(idx);
              return(
                <a href={memberOrgs.data[position].websiteUrl} key={memberOrgs.data[position].name} style={pageStyles.imageLink}>
                  <Image src={memberOrgs.data[position].logo.mediaItemUrl} style={pageStyles.memberOrgImage} />
                </a>
              )})}
          </Grid.Row>
        </Grid>
      }
    </div>
  )
}

const UpcomingEventCarousel = ({resultObject, errorReport, eventErr, pinnedEvents, selected_event, setSelectedEvent}) => {
  let event_date = []
  let url_substring
  const URL_SUBSTRING_MAP = {
    'Other': 'other',
    'Women in Data Conference': 'women-in-data-conference',
    'Upcoming Events': 'upcoming-events',
  }
  if (pinnedEvents[selected_event] && pinnedEvents[selected_event].node.eventDetails.startTime !== null) {
    event_date = pinnedEvents[selected_event].node.eventDetails.startTime.split(',')[0].split(' ')
    url_substring = URL_SUBSTRING_MAP[pinnedEvents[selected_event].node.eventDetails.page]
  }
  return(
    <div style={pageStyles.customCarousel.container}>
      <div style={pageStyles.customCarousel.headContainer}>
        <h4 style={pageStyles.customCarousel.head}>Upcoming Events</h4>
          {eventErr
          ?
          <div dangerouslySetInnerHTML={{ __html: eventErr }}/>
          :
          <Grid.Row as="a" href={`/event/${url_substring}/${pinnedEvents[selected_event].node.slug}`} columns={2}>
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
                    {pinnedEvents[selected_event].node.eventDetails.title}
                </Truncate>
              </div>
              <div style={pageStyles.customCarousel.description}>
                <Truncate lines={2} ellipsis={<span>... <span style={{ color: 'rgb(27, 158, 255)', textDecoration: 'underline'}}>Read more</span></span> }>
                  <span dangerouslySetInnerHTML={{ __html: pinnedEvents[selected_event].node.eventDetails.description }}/>
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
const PinnedBlogs = ({resultObject, errorReport, blogErr, pinnedBlogs, selected_blog, setSelectedBlog}) => {
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
              <div style={pageStyles.contentTitle} >
                {pinnedBlogs[selected_blog].node.title.length > 50 ?
                  pinnedBlogs[selected_blog].node.title.substring(0,47) + '...'
                  :
                  pinnedBlogs[selected_blog].node.title
                }
              </div>
              <div style={pageStyles.mainContent}>
                <Truncate lines={8} ellipsis={<span>...</span>}>
                  <div dangerouslySetInnerHTML={{ __html: pinnedBlogs[selected_blog].node.blogDetails.blog }} />
                </Truncate>
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

const OtherMedia = ({resultObject, errorReport, resourceErr, pinnedResources}) => {
  const [tweets, setTweets] = useState(undefined)
  const [loadingTweets, setLoadingTweets] = useState(false)

  const getTwitterFeed = async () => {
    setLoadingTweets(true)
    const res = await getTweets()
    if (res.status === 200) {
      setTweets(res.data.statuses)
      setLoadingTweets(false)
    } else {
      setTweets([])
      setLoadingTweets(false)
    }
  }
  if (tweets === undefined && loadingTweets === false) {
    getTwitterFeed()
  }
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
                  <Truncate lines={3} ellipsis={<span>...</span>}>
                      <div dangerouslySetInnerHTML={{ __html: resource.node.resourceDetails.description }}/>
                  </Truncate>
                </Item.Description>
              </Item.Content>
            </Item>)}
          </Item.Group>
        </Grid.Column>
        <Grid.Column>
          <div>
            <div style={pageStyles.otherMediaTitle}>
              Tweets
            </div>
            {loadingTweets && <div>Loading Tweets . . .</div>}
            {tweets && tweets.length === 0 && <div>Tweets are not available</div>}
            <div style={pageStyles.tweetContainer}>
            {tweets && tweets.length > 0 ? tweets.map((tweet)=>{
                const linkProps = {target: '_blank', rel: 'noreferrer'}
                try {
                  tweet.user.profile_image_url=tweet.user.profile_image_url_https;
                } catch (e) {}
                try {
                  tweet.retweeted_status.user.profile_image_url=tweet.retweeted_status.user.profile_image_url_https;
                } catch (e) {}

                return (
                  <Tweet key={tweet.id} data={tweet} linkProps={linkProps}/>
                )
              })
              :
              <span/>
            }
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

const JoinUs = ({resultObject, errorReport}) => {
  const joinUsDescription = {data: resultObject['joinUsDescription'], errStatus: errorReport['joinUsDescriptionHasError']}
  const renderHTML = (data) => <div dangerouslySetInnerHTML={{ __html: data }}/>
  return(
    <Grid stackable  style={pageStyles.section}>
      <Grid.Row>
        <Grid.Column width={12}>
          <div style={pageStyles.joinUsInfo}>
            {renderHTML(joinUsDescription.data)}
          </div>
        </Grid.Column>
        <Grid.Column  width={1} />
        <Grid.Column width={3}>
          <Button style={pageStyles.joinUsBtn} as="a" href="/contact">
            Get Involved
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

const Home = () => {
  // Create a query hook
  let pinnedEvents, eventErr, pinnedResources, resourceErr, pinnedBlogs, blogErr, homepageData
  let resultObject = {}
  let errorReport = {}
  const [selected_event, setSelectedEvent] = React.useState(undefined);
  const [selected_blog, setSelectedBlog] = React.useState(undefined);

  const [
      { loading: eventsLoading, data: eventsData, error: eventsError },
      { loading: resourcesLoading, data: resourcesData, error: resourcesError },
      { loading: blogsLoading, data: blogsData, error: blogsError },
      { loading: homepageItemsLoading, data: homepageItemsData, error: homepageItemsError },
  ] = [ useQuery(EVENTS), useQuery(RESOURCES), useQuery(BLOGS), useQuery(HOMEPAGE_DETAIL) ]

  if ( eventsLoading || resourcesLoading || blogsLoading || homepageItemsLoading) return <Loading />
  if ( eventsError || resourcesError || blogsError || homepageItemsError ) return <p>Error: {JSON.stringify(eventsError || resourcesError || blogsError || homepageItemsError)}</p>

  if (homepageItemsData.homepageitems.edges.length === 0) {
    Object.keys(HOMEPAGE_CONTENT_MAP).forEach((item, i) => {
      resultObject[HOMEPAGE_CONTENT_MAP[item].element] = HOMEPAGE_CONTENT_MAP[item].nullError
      errorReport[HOMEPAGE_CONTENT_MAP[item].element + 'HasError'] = true
    });
  } else {
    Object.keys(HOMEPAGE_CONTENT_MAP).forEach((item, i) => {
      homepageItemsData.homepageitems.edges.forEach((edge, j) => {
        if (edge.node.homepageitems.homepageElement === item) {
          if (item === 'Member Organizations') {
            if (resultObject[HOMEPAGE_CONTENT_MAP[item].element] === undefined || errorReport[HOMEPAGE_CONTENT_MAP[item].element + 'HasError']) {
              resultObject[HOMEPAGE_CONTENT_MAP[item].element] = []
            }
            resultObject[HOMEPAGE_CONTENT_MAP[item].element].push(edge.node.homepageitems[HOMEPAGE_CONTENT_MAP[item].element])
            errorReport[HOMEPAGE_CONTENT_MAP[item].element + 'HasError'] = false
          } else {
            resultObject[HOMEPAGE_CONTENT_MAP[item].element] = edge.node.homepageitems[HOMEPAGE_CONTENT_MAP[item].element]
            errorReport[HOMEPAGE_CONTENT_MAP[item].element + 'HasError'] = false
          }
        } else if (errorReport[HOMEPAGE_CONTENT_MAP[item].element + 'HasError'] !== false) {
          resultObject[HOMEPAGE_CONTENT_MAP[item].element] = HOMEPAGE_CONTENT_MAP[item].nullError
          errorReport[HOMEPAGE_CONTENT_MAP[item].element + 'HasError'] = true
        }
      });
    });
  }

  try {
    pinnedEvents = eventsData.events.edges.filter(evt=>evt.node.eventDetails.isPinned)
    if (pinnedEvents.length > 0 && selected_event === undefined) {
      eventErr = false
      setSelectedEvent(0)
    }
    if (pinnedEvents.length === 0) eventErr = EVENTS_ERROR_MESSAGES.error
  } catch (e) {
    eventErr = EVENTS_ERROR_MESSAGES.error
  }

  try {
    pinnedBlogs = blogsData.blogs.edges.filter(evt=>evt.node.blogDetails.isPinned)
    if (pinnedBlogs.length > 0 && selected_blog === undefined) {
      blogErr = false
      setSelectedBlog(0)
    }
    if (pinnedBlogs.length === 0) blogErr = BLOGS_ERROR_MESSAGES.error
  } catch (e) {
    blogErr = BLOGS_ERROR_MESSAGES.error
  }

  try {
    pinnedResources = resourcesData.resources.edges.filter(evt=>evt.node.resourceDetails.isPinned)
    if (pinnedResources.length > 0) resourceErr = false
    if (pinnedResources.length === 0) resourceErr = RESOURCES_ERROR_MESSAGES.error
  } catch (e) {
    resourceErr = RESOURCES_ERROR_MESSAGES.error
  }

  return (
    <HomePageLayout {...{resultObject, errorReport}}>
        <AboutSection {...{resultObject, errorReport, bgColor: 'white'}}/>
        <MemberOrganization {...{resultObject, errorReport, bgColor: "#f7f7f7"}}/>
        <UpcomingEventCarousel {...{eventErr, selected_event, setSelectedEvent, pinnedEvents, bgColor: '#F2F2F2', bgSize: '40%'}}/>
        <PinnedBlogs {...{blogErr, pinnedBlogs, selected_blog, setSelectedBlog}}/>
        <OtherMedia {...{resourceErr, pinnedResources}}/>
        <JoinUs {...{resultObject, errorReport, bgColor: '#F7F7F7'}}/>
    </HomePageLayout>
  );
};

export default Home;

const FONT_SIZE = 17
const pageStyles = {
  section: { paddingTop: 80, paddingBottom: 80 },
  sectionNoUpperPadding: { paddingBottom: 100, clear: 'both' },
  title: { fontSize: 26, color: '#403E3E' },
  middleTitle: {width: '100%', textAlign: 'center'},
  middleTitleUnderline: { borderTop: '3px solid #403E3E', width: '60px', margin: 'auto', paddingBottom: 30 },
  memberOrgImage: {maxWidth: '200px', maxHeight: '100px', padding: 1},
  imageLink: { margin: 'auto'},
  content: { fontSize: FONT_SIZE },
  image: { margin: 'auto', boxShadow: '15px -15px #FCCA35', width: '70%' },
  imageWrapper: { paddingTop: 35, paddingRight: 15, height: '100%', },
  tweetContainer: {maxHeight: 400, overflowY: 'auto', borderBottom: '1px solid #ddd'},
  customCarousel: {
    container: { marginTop: 100, marginBottom: 100 },
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
      fontSize: 26,
      marginTop: -10,
      paddingBottom: 0,
      color: '#403e3e'
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
      minHeight: 50,
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: 200,
      WebkitTransform: 'scale(1,1.1)'
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
      fontWeight: '600',
      fontSize: 20,
    },
    description: {
      fontSize: FONT_SIZE,
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
    paddingRight: 40,
    paddingLeft: 40,
    paddingTop: 40,
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
    fontSize: 16,
    paddingBottom: '5px'
  },
  contentTitle: {
    fontSize: 30,
    lineHeight: 1,
    fontWeight: '600',
    width: '80%',
  },
  mainContent: {
    paddingTop: 10,
    fontSize: FONT_SIZE,
    height: '260px',
    overflowY: 'auto',
    lineHeight: 1.45
  },
  blogReadMore: {
    color: 'rgb(27, 158, 255)',
    fontSize: FONT_SIZE,
    position:'absolute',
    bottom: 15,
    borderTop: '1px solid black',
    width: '85%',
    paddingTop: 5,
  },
  blogReadMoreBtn: {
    color: 'rgb(27, 158, 255)',
    backgroundColor: 'rgba(0,0,0,0)',
    textDecoration: 'underline',
    margin: 0,
    paddingLeft: 0,
    paddingTop: 5,
    paddingBottom: 0,
    border: 'none',
    float: 'left',
  },
  detailCarousel: {
    float: 'right',
  },
  otherMediaTitle: {
    fontSize: 26,
    lineHeight: '36px',
    fontWeight: 600,
    paddingBottom: 10,
    paddingTop: 10,
    borderBottom: '1px solid #0f46641f',
  },
  usefulResourceItem: {
    paddingBottom: 10,
    borderBottom: '1px solid #ddd'
  },
  usefulResourceHead: {
    fontSize: FONT_SIZE,
    color: 'rgb(27, 158, 255)',
    textDecoration:'underline'
  },
  usefulResourceDescription: {
    fontSize: FONT_SIZE,
  },
  joinUsInfo: {
    fontSize: FONT_SIZE,
    lineHeight: 1.3,
  },
  joinUsBtn: {
    backgroundColor: "rgb(27, 158, 255)", color: '#fff',
    padding: '10px 40px', fontSize: FONT_SIZE, fontWeight: 600
  }
}
