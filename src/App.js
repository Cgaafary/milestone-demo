import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import 'flexboxgrid/css/flexboxgrid.css';
import 'material-design-lite/material.css'

// Custom Components
import StudentList from './components/StudentList';
import StudentPage from './components/StudentPage';
import { getObjectById } from './customFunctions';
import { reformatArrayByLevel } from './customFunctions';

// Import Fake Data
import students from './fakedata/students';
import milestones from './fakedata/milestones';

class App extends Component {
  constructor() {
    super();

    // Properties
    this.normalizedMilestones = this.normalizeNode(milestones);
    this.currentMilestones = reformatArrayByLevel(this.normalizedMilestones);

    // Binding Methods
    this.resetMilestones = this.resetMilestones.bind(this);
    this.handleMilestoneResponse = this.handleMilestoneResponse.bind(this);

    this.state = { 
      displayedMilestones: this.normalizedMilestones,
      achievedMilestones: [],
      rejectedMilestones: [],
      currentMilestones: this.currentMilestones[0]
     }
  }

  // Removes a milestone
  handleMilestoneResponse({id, achieved, evaluatedUser}) {
      let milestoneObject = getObjectById(id, this.normalizedMilestones);
      let normalizedMilestones = this.state.displayedMilestones.filter(value => value !== milestoneObject);
      var achievedMilestones = this.state.achievedMilestones;
      var rejectedMilestones = this.state.rejectedMilestones;
      
      // Handle milestone responses
      if (achieved) {
        achievedMilestones.push({id, achieved})
        this.setState(achievedMilestones)
      } else {
        rejectedMilestones.push({id, achieved})
        this.setState(rejectedMilestones)
      }

      this.setState({displayedMilestones: normalizedMilestones});
  }

  // Normalizes the object provided by scaphold.io
  normalizeNode (nodeArray) {
      let normalizedObject = nodeArray.map(({node}) => node);
      return normalizedObject;
  }

  // Reset milestones
  resetMilestones () {
    this.setState({ 
      displayedMilestones: this.normalizedMilestones,
      achievedMilestones: [],
      rejectedMilestones: []
     })
  }

  render() {
    console.log(this.state.currentMilestones);
    return (
      <Router>
        <div>
          <span>
            <button onClick={this.resetMilestones}>Reset Milestones</button>
            <button onClick={this.resetMilestones}><Link to="/students">Student List</Link></button>
          </span>
          <Route path='/students' render={props => <StudentList {...props} students={students}/>} />
          <Route path='/user/:id' render={props => <StudentPage {...props} students={students} milestones={this.state.displayedMilestones} handleMilestoneResponse={this.handleMilestoneResponse} />} />
        </div>
      </Router>
    );
  }
}

export default App;
