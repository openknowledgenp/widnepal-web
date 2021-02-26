import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

// GraphQL endpoint
const LOCAL_GRAPHQL_URL = 'http://localhost:8000/index.php?graphql';
const STAGING_GRAPHQL_URL = 'http://wid-admin.oknp.org/index.php?graphql';
const PRODUCTION_GRAPHQL_URL = 'https://www.womenindatanepal.com/index.php?graphql';

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  // uri: STAGING_GRAPHQL_URL
  uri: LOCAL_GRAPHQL_URL
});

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ initialState }) =>
    new ApolloClient({
      link: link,
      cache: new InMemoryCache()
        //  rehydrate the cache using the initial data passed from the server:
        .restore(initialState || {})
    })
);
