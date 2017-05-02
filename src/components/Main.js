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

    this.state = { loggedIn: false }

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignIn() {
    this.setState({loggedIn: true})
    this.props.history.replace('/');
  }

  handleSignOut() {
    this.setState({loggedIn: false})
  }

  // The problem with auth has been identified to this function
  componentWillReceiveProps(nextProps) {
    const { loading, user } = nextProps.data;
    
    if (loading) { 
      return;
    } 

    if (user) {
      this.setState({ loggedIn: true })
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
         <ProtectedComponents handleSignOut={this.handleSignOut} />
        </div>
      );
    }
  }
}
export default graphql(getCurrentUser)(Main);