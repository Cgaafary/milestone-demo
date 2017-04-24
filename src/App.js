import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'flexboxgrid/css/flexboxgrid.css';
import 'material-design-lite/material.css'

// Custom Components
import StudentList from './components/StudentList';
import StudentPage from './components/StudentPage';

// Import Fake Data
import students from './fakedata/students';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <h2>Choose a student</h2>
        <StudentList students={students}/>
        {/*<Route path="/" component={StudentList} students={students}/>*/}
        <Route path='/user/:id' render={props => <StudentPage {...props} students={students}/>} />
      </div>
      </Router>
    );
  }
}

export default App;
