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
    this.handleMilestoneResponse = this.handleMilestoneResponse.bind(this);

    this.state = { 
      displayedMilestones: this.normalizedMilestones,
      achievedMilestones: [],
      rejectedMilestones: []
     }
  }

  // Removes a milestone
  handleMilestoneResponse({id, achieved}) {
      // console.log(`ID for clicked evaluation object: ${id}`);
      let milestoneObject = getObjectById(id, this.normalizedMilestones);
      let filteredMilestones = this.state.displayedMilestones.filter(value => value !== milestoneObject);
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

      this.setState({displayedMilestones: filteredMilestones});
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
