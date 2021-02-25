import { useQuery } from '@apollo/react-hooks';
import { ABOUT_US_CONTENT, ABOUT_US_CONTENT_ERROR } from '../../graphql/about.queries';
import { PageLayout } from '../../components/pageLayout'
import { Loading } from '../../components/loading'
import { useRouter } from 'next/router'

const About = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(ABOUT_US_CONTENT);
  const router = useRouter()
  const { page } = router.query

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  const ABOUT_US_PAGE = 'Other'
  const filteredPageContents = data.abouts.edges.filter(post=>post.node.about_us_page.page===ABOUT_US_PAGE)
  const pageContent = filteredPageContents.filter(post=>post.node.about_us_page.pageTitle===page)
  return (
    <PageLayout title={`About | ${page}`}>
          {(filteredPageContents[0] && filteredPageContents[0].node.about_us_page.pageContent!=='' && filteredPageContents[0].node.about_us_page.pageContent!==null) ?
            <div style={pageStyles.aboutUs} dangerouslySetInnerHTML={{ __html: filteredPageContents[0].node.about_us_page.pageContent }}/>
            :
            <div style={pageStyles.aboutUs} dangerouslySetInnerHTML={{ __html: ABOUT_US_CONTENT_ERROR.error }}/>
          }
    </PageLayout>
  );
};

export default About;

const pageStyles = {
  aboutUs: {fontSize: 18, paddingTop: 20, paddingBottom: 20}
}
