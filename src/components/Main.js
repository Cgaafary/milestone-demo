import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

// import components
import StudentList from './StudentList';
import StudentPage from './StudentPage';

class Main extends Component {
  render() { 
    return (
        <div>
          <span>
            <Link to='/students'><button>Student List</button></Link>
            <button>Reset Milestones</button>
          </span>
          <Route path="/students" component={StudentList} />
          <Route path="/student/:id" component={StudentPage} />
        </div>
    );
  }
}
export default Main;