import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router'
import { RESOURCE_WITH_SLUG } from '../../graphql/resources.queries';
import { PageLayout } from '../../components/pageLayout'
import { Loading } from '../../components/loading'
import HeaderImg from '../../assets/detail_img_header.svg'
import {
  Grid,
  Image,
  Button
} from 'semantic-ui-react';

const ResourceDetail = () => {
  const router = useRouter()
  const { slug } = router.query

  // Create a query hook
  const { data, loading, error } = useQuery(RESOURCE_WITH_SLUG(slug));
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  } else if (data.resources.edges.length === 0){
    return <PageLayout title="Resource: Not Found">
          <h2>The page you are looking for does not exist.</h2>
    </PageLayout>
  }

  const post = data.resources.edges[0]
  return (
    <PageLayout title={post.node.title} format="resourceread" headerImage={HeaderImg}>
        <Grid stackable className="resource-read-screen" style={pageStyles.resourceContainer}>
          <Grid.Row>
            <Grid.Column width={11}>
              {post.node.resourceDetails.description !== null && post.node.resourceDetails.description !== '' ?
                <div>
                  <div dangerouslySetInnerHTML={{ __html: post.node.resourceDetails.description }} style={pageStyles.description}/>
                  {post.node.resourceDetails.attachedFile !== null && post.node.resourceDetails.attachedFile.mediaItemUrl!==null &&
                    <div>
                      <hr/>
                      <Button
                        download
                        color="blue"
                        as="a"
                        href={post.node.resourceDetails.attachedFile.mediaItemUrl}
                        icon="download"
                        label="Download this resource"
                      />
                    </div>}
                </div>
                :
                <div style={pageStyles.description}>This resource has no content.</div>
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </PageLayout>
  );

};

export default ResourceDetail;


const pageStyles = {
  description: {fontSize: 18, paddingTop:20, marginTop: 15},
  resourceContainer: {marginBottom: 80},
}
