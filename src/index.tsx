import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Overview from './screens/overview';
import Details from './screens/details';
// @ts-ignore
import {API_URL} from 'react-native-dotenv';
import { Provider } from './store';

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache()
});
const Stack = createStackNavigator();

const App = () => {
  return(
    <React.Fragment>
      <Provider>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Launches" component={Overview} />
              <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
          </NavigationContainer>
        </ApolloProvider>
      </Provider>
    </React.Fragment>
  );
};

export default App;
