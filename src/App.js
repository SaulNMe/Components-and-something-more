import  React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from 'app/screens/LoginScreen';
import { Provider } from 'react-redux';
import store from './app/Store.js';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import ExchangeRates from 'app/components/ExchangeRates';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
})

export default () => (
    <Provider store={store}>
      <div>
        <Router>
          <Route exact path='/' component={LoginScreen}/>
        </Router>
        <App/>
      </div>
    </Provider>
);

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first apollo app</h2>
      <ExchangeRates/>
    </div>
  </ApolloProvider>
);