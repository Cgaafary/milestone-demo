import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import StudentList from './StudentList';
import StudentPage  from './StudentPage';

class ProtectedComponents extends Component {
    render() {
        return (
        <div>
            <Route path="/" render={props => <Header {...props} handleSignOut={this.props.handleSignOut} />} />
            <Route path="/students" component={StudentList} />
            <Route path="/student/:id" component={StudentPage} />
        </div>
        );
    }
}

export default ProtectedComponents;