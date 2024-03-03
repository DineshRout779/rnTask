import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {REACT_APP_TOKEN} from '@env';
import AppContextProvider from './src/context/AppContext';

const token = REACT_APP_TOKEN;
const uri = 'https://api.github.com/graphql';

const cache = new InMemoryCache();
const link = new HttpLink({uri, headers: {Authorization: `Bearer ${token}`}});
export const client = new ApolloClient({cache, link});

const RootApp = () => {
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </AppContextProvider>
    </ApolloProvider>
  );
};

AppRegistry.registerComponent(appName, () => RootApp);
