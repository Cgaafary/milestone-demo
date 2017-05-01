import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

// import components
import StudentList from './StudentList';
import StudentPage from './StudentPage';

class Main extends Component {
  render() { 
    return (
        <div>
          <Link to='/students'><button>Student List</button></Link>
          <Route path="/students" component={StudentList} />
          <Route path="/student/:id" component={StudentPage} />
        </div>
    );
  }
}
export default Main;