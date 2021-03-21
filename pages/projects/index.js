import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { PROJECTS, PROJECT_ERROR_MESSAGES } from '../../graphql/project.queries';
import { PageLayout } from '../../components/pageLayout'
import { Loading } from '../../components/loading'
import Truncate from 'react-truncate';
import {
  Item,
  Pagination
} from 'semantic-ui-react'

const Project = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(PROJECTS);
  const [page, setPage] = React.useState(1);

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

  let projectList = []
  const ITEMS_PER_PAGE = 10
  const totalPages = parseInt(data.projects.edges.length / ITEMS_PER_PAGE) + ((data.projects.edges.length % ITEMS_PER_PAGE) > 0 ? 1:0)
  if (data.projects.edges && data.projects.edges.length > 0) {
    let startingPoint = (page - 1) * ITEMS_PER_PAGE
    let endingPoint = ((data.projects.edges.length-1) < page * ITEMS_PER_PAGE) ? ((page*ITEMS_PER_PAGE) -  (page *ITEMS_PER_PAGE - (data.projects.edges.length))) : page *ITEMS_PER_PAGE
    for (var i = startingPoint; i < endingPoint; i++) {
      projectList.push(data.projects.edges[i])
    }
  }
  const handlePaginationChange = (e, { activePage }) => setPage(activePage)

  return (
    <PageLayout title="Projects">
      {projectError
      ?
      <div dangerouslySetInnerHTML={{ __html: projectError }}/>
      :
      <Item.Group style={pageStyles.section}>
        {
          projectList.map(post => {
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
        <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={'...'}
          firstItem={null}
          lastItem={null}
          siblingRange={3}
          totalPages={totalPages}
          onPageChange={handlePaginationChange}
        />
      </Item.Group>}

    </PageLayout>
  );
};

export default Project;

const FONT_SIZE = 17
const pageStyles = {
  section: { paddingTop: 40, paddingBottom: 40 },
  item: { borderBottom: '1px solid #0f46641f', paddingBottom: 30, paddingTop: 20 },
  content: {},
  header: {fontSize: 20},
  description: {fontSize: FONT_SIZE},
}
