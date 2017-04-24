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
import milestones from './fakedata/milestones';

class App extends Component {
  constructor() {
    super();
    this.normalizedMilestones = this.normalizeNode(milestones);
    this.resetMilestones = this.resetMilestones.bind(this);

    this.state = { milestones: this.normalizedMilestones }
  }

  // Normalizes the object provided by scaphold.io
  normalizeNode (nodeArray) {
      let normalizedObject = nodeArray.map(({node}) => node);
      return normalizedObject;
  }

  // Reset milestones
  resetMilestones () {
    this.setState({ milestones: this.normalizedMilestones })
    console.log('Reset Milestones Clicked');
    console.log(this.state.milestones)
  }

  render() {
    return (
      <Router>
        <div>
          <h2>Choose a student</h2>
          <StudentList students={students}/>
          <button onClick={this.resetMilestones}>Reset Milestones</button>
          <Route path='/user/:id' render={props => <StudentPage {...props} students={students} milestones={this.state.milestones}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
