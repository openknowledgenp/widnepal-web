import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import { POSTS } from '../../graphql/event.queries';
import { PageDetailLayout } from '../../components/pageDetailLayout'

const Event = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(POSTS);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
    <PageDetailLayout title="Events">
      this is good
    </PageDetailLayout>
  );
};

export default Event;
