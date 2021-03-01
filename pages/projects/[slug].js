import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router'
import { PROJECT_WITH_SLUG } from '../../graphql/project.queries';
import { PageLayout } from '../../components/pageLayout'
import { Loading } from '../../components/loading'
import HeaderImg from '../../assets/detail_img_header.svg'
import {
  Grid,
  Image,
} from 'semantic-ui-react';

const ProjectDetail = () => {
  const router = useRouter()
  const { slug } = router.query

  // Create a query hook
  const { data, loading, error } = useQuery(PROJECT_WITH_SLUG(slug));
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  } else if (data.projects.edges.length === 0){
    return <PageLayout title="Project: Not Found">
          <h2>The page you are looking for does not exist.</h2>
    </PageLayout>
  }

  const post = data.projects.edges[0]
  return (
    <PageLayout title={post.node.title} format="projectread" headerImage={HeaderImg}>
        <Grid className="project-read-screen" style={pageStyles.projectContainer}>
              {post.node.projectDetails.brief !== null && post.node.projectDetails.brief !== '' ?
                <div dangerouslySetInnerHTML={{ __html: post.node.projectDetails.brief }} style={pageStyles.description}/>
                :
                <div style={pageStyles.description}>This project has no content.</div>
              }
        </Grid>
    </PageLayout>
  );

};

export default ProjectDetail;


const pageStyles = {
  description: {fontSize: 18, paddingTop:20, marginTop: 15},
  projectContainer: {paddingBottom: 80},
}
