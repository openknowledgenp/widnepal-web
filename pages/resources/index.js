import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { RESOURCES, RESOURCES_ERROR_MESSAGES } from '../../graphql/resources.queries';
import { PageLayout } from '../../components/pageLayout'
import { Loading } from '../../components/loading'
import Truncate from 'react-truncate';
import {
  Item,
  Pagination
} from 'semantic-ui-react'

const Resource = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(RESOURCES);
  const [page, setPage] = React.useState(1);

  let resourceError
  let resources = []
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  try {
    resources = data.resources.edges
    resourceError = false
    if (resources.length === 0) {
      resourceError = RESOURCES_ERROR_MESSAGES.error
    }
  } catch (e) {
    resourceError = RESOURCES_ERROR_MESSAGES.error
  }

  let resourcesList = []
  const ITEMS_PER_PAGE = 10
  const totalPages = parseInt(data.resources.edges.length / ITEMS_PER_PAGE) + ((data.resources.edges.length % ITEMS_PER_PAGE) > 0 ? 1:0)
  if (data.resources.edges && data.resources.edges.length > 0) {
    let startingPoint = (page - 1) * ITEMS_PER_PAGE
    let endingPoint = ((data.resources.edges.length-1) < page * ITEMS_PER_PAGE) ? ((page*ITEMS_PER_PAGE) -  (page *ITEMS_PER_PAGE - (data.resources.edges.length))) : page *ITEMS_PER_PAGE
    for (var i = startingPoint; i < endingPoint; i++) {
      resourcesList.push(data.resources.edges[i])
    }
  }
  const handlePaginationChange = (e, { activePage }) => setPage(activePage)

  return (
    <PageLayout title="Resources">
      {resourceError
      ?
      <h2><div dangerouslySetInnerHTML={{ __html: resourceError }}/></h2>
      :
      <Item.Group style={pageStyles.section}>
        {resourcesList.map(post => {
          return (
              <Item as='a' href={`/resources/${post.node.slug}`} key={`post__${post.node.id}`} style={pageStyles.item}>
                <Item.Content style={pageStyles.content}>
                  <Item.Header style={pageStyles.header}>
                      {post.node.title}
                  </Item.Header>
                  <Item.Description style={pageStyles.description}>
                    <Truncate lines={8} ellipsis={<span>...</span>}>
                      <div dangerouslySetInnerHTML={{ __html: post.node.resourceDetails.description }}/>
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

export default Resource;

const FONT_SIZE = 17
const pageStyles = {
  section: { paddingTop: 40, paddingBottom: 40 },
  item: { borderBottom: '1px solid #0f46641f', paddingBottom: 30, marginBottom: 20 },
  content: {},
  header: {fontSize: 20},
  description: {fontSize: FONT_SIZE},
}
