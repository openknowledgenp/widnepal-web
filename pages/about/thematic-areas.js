import { useQuery } from '@apollo/react-hooks';
import { ABOUT_US_CONTENT, ABOUT_US_CONTENT_ERROR } from '../../graphql/about.queries';
import { PageLayout } from '../../components/pageLayout'
import { Loading } from '../../components/loading'

const About = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(ABOUT_US_CONTENT);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  const ABOUT_US_PAGE = 'Thematic Areas'
  const filteredPageContents = data.abouts.edges.filter(post=>post.node.about_us_page.page===ABOUT_US_PAGE)
  const thematicAreasContent = filteredPageContents[0]
  return (
    <PageLayout title={`About | ${ABOUT_US_PAGE}`}>
          {thematicAreasContent && thematicAreasContent.node.about_us_page.pageContent !== ''  && thematicAreasContent.node.about_us_page.pageContent !== null  ?
            <div style={pageStyles.aboutUs} dangerouslySetInnerHTML={{ __html: thematicAreasContent.node.about_us_page.pageContent }}/>
            :
            <div style={pageStyles.aboutUs} dangerouslySetInnerHTML={{ __html: ABOUT_US_CONTENT_ERROR.error }}/>
          }
    </PageLayout>
  );
};

export default About;

const pageStyles = {
  aboutUs: {fontSize: 18, paddingTop: 40, paddingBottom: 40}
}
