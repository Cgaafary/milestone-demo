import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import StudentList from './StudentList';
import StudentPage  from './StudentPage';

class ProtectedComponents extends Component {
    render() {
        return (
        <div>
            <Route path="/" render={props => <Header {...props} handleSignOut={this.props.handleSignOut} currentUser={this.props.currentUser}/>} />
            <Route path="/students" component={StudentList} />
            <Route
                path="/student/:id"
                render={props => <StudentPage {...props} {...this.props}/>} />
        </div>
        );
    }
}

export default ProtectedComponents;