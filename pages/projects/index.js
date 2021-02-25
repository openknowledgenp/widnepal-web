import { useQuery } from '@apollo/react-hooks';
import { PROJECTS, PROJECT_ERROR_MESSAGES } from '../../graphql/project.queries';
import { PageLayout } from '../../components/pageLayout'
import { Loading } from '../../components/loading'
import Truncate from 'react-truncate';
import {
  Item
} from 'semantic-ui-react'

const Project = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(PROJECTS);
  let projectError
  let projects = []
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  try {
    projects = data.projects.edges
    projectError = false
    if (projects.length === 0) {
      projectError = PROJECT_ERROR_MESSAGES.error
    }
  } catch (e) {
    projectError = PROJECT_ERROR_MESSAGES.error
  }

  return (
    <PageLayout title="Projects">
      {projectError
      ?
      <div dangerouslySetInnerHTML={{ __html: projectError }}/>
      :
      <Item.Group style={pageStyles.section}>
        {data.projects.edges.length === 0 ?
            <div>That</div>
          :
          data.projects.edges.map(post => {
          return (
              <Item as='a' href={`/projects/${post.node.slug}`} key={`post__${post.node.id}`} style={pageStyles.item}>
                <Item.Content style={pageStyles.content}>
                  <Item.Header style={pageStyles.header}>
                      {post.node.title}
                  </Item.Header>
                  <Item.Description style={pageStyles.description}>
                    <Truncate lines={8} ellipsis={<span>...</span>}>
                      <div dangerouslySetInnerHTML={{ __html: post.node.projectDetails.brief }}/>
                    </Truncate>
                  </Item.Description>
                </Item.Content>
              </Item>
          );
        })}
      </Item.Group>}
    </PageLayout>
  );
};

export default Project;

const pageStyles = {
  section: { paddingTop: 40, paddingBottom: 40, width: '80%' },
  item: { borderBottom: '1px solid #0f46641f', paddingBottom: 30, marginBottom: 20 },
  content: {},
  header: {fontSize: 20},
  description: {fontSize: 16},
}
