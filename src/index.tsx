import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import Overview from './screens/overview';
// @ts-ignore
import {API_URL} from 'react-native-dotenv';

const client = new ApolloClient({
  uri: API_URL,
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
