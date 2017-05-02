import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './data/apolloClient';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

// Import Components
import Main from './components/Main';

// Import Functions
import './App.css';
import 'flexboxgrid/css/flexboxgrid.css';
import 'material-design-lite/material.css'

class App extends Component {
  render() { 
    return (
      <ApolloProvider client={client}>
        <Router history={browserHistory}>
          <Route path="/" component={Main}/>
        </Router>
      </ApolloProvider>
    );
  } 
}

export default App;
