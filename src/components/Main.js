import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// import components
import StudentList from './StudentList';
import StudentPage from './StudentPage';
import Header from './Header';
import SignIn from './SignIn';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {id: '', fullName: '', userType: ''},
      signedIn: false
    }

    this.signinUser = this.signinUser.bind(this);
  }

  signinUser(currentUser) {
    this.setState({
      currentUser,
      signedIn: true
    })
  }

  componentDidUpdate() {
    const { currentUser } = this.state;
    const { id, fullName, userType } = currentUser
    console.log(id, fullName, userType);
  }



  render() { 
    return (
        <div>
          <Switch>
            <Route exact path="/" component={Header} />
            <Route path="/signin" render={props => <SignIn {...props} signinUser={this.signinUser} />} />
          </Switch>
          <Route path="/students" component={StudentList} />
          <Route path="/student/:id" component={StudentPage} />
        </div>
    );
  }
}
export default Main;