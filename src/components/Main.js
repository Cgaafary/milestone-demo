import React, { Component } from 'react';
import { graphql } from 'react-apollo';

// import components
import Public from './public/Public';
import ProtectedComponents from './protected/ProtectedComponents';

// Queries and Mutations
import getCurrentUser from '../data/queries/getCurrentUser';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      loggedIn: false,
      currentUser: {}
     }

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignIn(user) {
    this.setState({loggedIn: true, currentUser: user})
    this.props.history.replace('/');
  }

  handleSignOut() {
    localStorage.removeItem('token');
    this.props.history.replace('/');
    location.reload();
  }

  // The problem with auth has been identified to this function
  componentWillReceiveProps(nextProps) {
    const { loading, user } = nextProps.data;
    
    if (loading) { 
      return;
    } 

    if (user) {
      this.setState({ loggedIn: true, currentUser: user })
    }

  }


  render() {
    if (!this.state.loggedIn) {
      return(
      <div>
        <Public handleSignIn={this.handleSignIn}/>
      </div>
      );
    } else {
      return (
        <div>
         <ProtectedComponents handleSignOut={this.handleSignOut} currentUser={this.state.currentUser}/>
        </div>
      );
    }
  }
}
export default graphql(getCurrentUser)(Main);