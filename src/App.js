import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import 'flexboxgrid/css/flexboxgrid.css';
import 'material-design-lite/material.css'

// Custom Components
import StudentList from './components/StudentList';
import StudentPage from './components/StudentPage';
import { getObjectById } from './customFunctions';

// Import Fake Data
import students from './fakedata/students';
import milestones from './fakedata/milestones';

class App extends Component {
  constructor() {
    super();
    this.normalizedMilestones = this.normalizeNode(milestones);
    this.resetMilestones = this.resetMilestones.bind(this);
    this.removeMilestone = this.removeMilestone.bind(this);

    this.state = { milestones: this.normalizedMilestones }
  }

  // Removes a milestone
  removeMilestone(input) {
      console.log(`The current user's id is ${input}`);
      let milestoneObject = getObjectById(input, this.normalizedMilestones);
      let filteredMilestones = this.state.milestones.filter(value => value !== milestoneObject);
      this.setState({milestones: filteredMilestones});
  }

  // Normalizes the object provided by scaphold.io
  normalizeNode (nodeArray) {
      let normalizedObject = nodeArray.map(({node}) => node);
      return normalizedObject;
  }

  // Reset milestones
  resetMilestones () {
    this.setState({ milestones: this.normalizedMilestones })
  }

  render() {
    return (
      <Router>
        <div>
          <span><button onClick={this.resetMilestones}>Reset Milestones</button><button onClick={this.resetMilestones}><Link to="/students">Student List</Link></button></span>
          <Route path='/students' render={props => <StudentList {...props} students={students}/>} />
          <Route path='/user/:id' render={props => <StudentPage {...props} students={students} milestones={this.state.milestones} removeMilestone={this.removeMilestone} />} />
        </div>
      </Router>
    );
  }
}

export default App;
