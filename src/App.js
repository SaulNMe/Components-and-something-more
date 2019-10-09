import  React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from 'app/screens/LoginScreen';
import { Provider } from 'react-redux';
import store from './app/Store.js';

export default () => (
    <Provider store={store}>
      <div>
        <Router>
          <Route exact path='/' component={LoginScreen}/>
        </Router>
      </div>
    </Provider>
);