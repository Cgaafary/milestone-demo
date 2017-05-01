import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './data/apolloClient';
import Home from './components/Home';
import './App.css';
import 'flexboxgrid/css/flexboxgrid.css';
import 'material-design-lite/material.css'

class App extends Component {

  render() { 
    return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    );
  }
}

export default App;
