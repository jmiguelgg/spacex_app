import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import Overview from './screens/overview';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});
const App = () => {
  return(
    <React.Fragment>
      <ApolloProvider client={client}>
        <Overview />
      </ApolloProvider>
    </React.Fragment>
  );
};

export default App;
