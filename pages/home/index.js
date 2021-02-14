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
import {
  Button,
  Container,
  Grid,
  Image
} from 'semantic-ui-react'

const pageStyles = {
  section: { paddingTop: 80, paddingBottom: 80 },
  title: { fontSize: 28, color: '#403E3E' },
  middleTitle: {width: '100%', textAlign: 'center'},
  middleTitleUnderline: { borderTop: '3px solid #403E3E', width: '60px', margin: 'auto', paddingBottom: 30 },
  memberOrgImage: {maxWidth: '200px', maxHeight: '145px'},
  imageButton: {backgroundColor: '#efefef', padding: 1, margin: 'auto'},
  content: { fontSize: 18 },
  image: { margin: 'auto', boxShadow: '15px -15px #FCCA35', width: '70%' },
  imageWrapper: { paddingTop: 35, paddingRight: 15, height: '100%', },
}

const getLink = (html_string) => {
  return "http://example.com/"
}

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
                href={getLink(img.description)}
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
        <AboutSection {...{title, content, mediaFileError, mediaFile, bgColor: "#f7f7f7"}}/>
        <MemberOrganization {...{memberOrgMedia, memberOrgMediaError, bgColor: 'white'}}/>
    </HomePageLayout>
  );
};

export default Home;
