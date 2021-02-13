import { useQuery } from '@apollo/react-hooks';
import {
  HEADER_DESCRIPTION,
  ABOUT,
  ABOUT_ERROR_MESSAGES,
  ABOUT_MEDIA,
  ABOUT_MEDIA_ERROR_MESSAGES,
} from '../../graphql/home.queries';
import { HomePageLayout } from '../../components/homePageLayout'
import HeaderImage from "../../assets/images/home/about_featured_image.svg"
import {
  Button,
  Container,
  Grid,
  Image
} from 'semantic-ui-react'

const pageStyles = {
  section: { paddingTop: 80, paddingBottom: 80 },
  title: { fontSize: 28 },
  content: { fontSize: 18 },
  image: { margin: 'auto', boxShadow: '15px -15px #FCCA35', width: '70%' },
  imageWrapper: { paddingTop: 35, paddingRight: 15, height: '100%', },
}

const Home = () => {
  // Create a query hook
  const queryMultiple = () => {
    const headerData = useQuery(HEADER_DESCRIPTION);
    const aboutData = useQuery(ABOUT);
    const aboutMediaData = useQuery(ABOUT_MEDIA);
    return [headerData, aboutData, aboutMediaData];
  }

  const [
      { loading: headerLoading, data: headerData, error: headerError },
      { loading: aboutLoading, data: aboutData, error: aboutError },
      { loading: aboutMediaLoading, data: aboutMediaData, error: aboutMediaError },
  ] = queryMultiple()

  if (aboutLoading || headerLoading || aboutMediaLoading) {
    return <p>Loading...</p>;
  }

  if (aboutError || headerError || aboutMediaError) {
    return <p>Error: {JSON.stringify(aboutError || headerError || headerError)}</p>;
  }

  let title, content, mediaFile, mediaFileError

  try {
    title = aboutData.posts.edges[0].node.title;
    content = aboutData.posts.edges[0].node.content;
  } catch (e) {
    title = ABOUT_ERROR_MESSAGES.errorTitle;
    content = ABOUT_ERROR_MESSAGES.errorDescription;
  }

  try {
    mediaFile = aboutMediaData.mediaItems.nodes[0].mediaItemUrl
    mediaFileError = false
  } catch (e) {
    mediaFileError = ABOUT_MEDIA_ERROR_MESSAGES.error
  }

  return (
    <HomePageLayout data={headerData}>
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
    </HomePageLayout>
  );
};

export default Home;
