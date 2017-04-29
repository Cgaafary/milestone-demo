import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import 'flexboxgrid/css/flexboxgrid.css';
import 'material-design-lite/material.css'

// Custom Components
import StudentList from './components/StudentList';
import StudentPage from './components/StudentPage';
import { getObjectById, reformatArrayByLevel, normalizeNode } from './customFunctions';

// Import Fake Data
import students from './fakedata/students';
import milestones from './fakedata/milestones';

class App extends Component {
  constructor() {
    super();

    // Properties
    this.normalizedMilestones = normalizeNode(milestones);
    this.currentMilestones = reformatArrayByLevel(this.normalizedMilestones);

    // Binding Methods
    this.resetMilestones = this.resetMilestones.bind(this);
    this.handleMilestoneResponse = this.handleMilestoneResponse.bind(this);
    this.advanceLevel = this.advanceLevel.bind(this);

    this.state = { 
      displayedMilestones: this.currentMilestones[0],
      achievedMilestones: [],
      rejectedMilestones: [],
      payload: [],
      milestoneIndex: 0,
      achievedAtCurrentLvl: 0,
      currentLevelLength: this.currentMilestones[0].length,
     }
  }

  componentDidUpdate() {
    const { achievedAtCurrentLvl, currentLevelLength, displayedMilestones, milestoneIndex, payload } = this.state;
    if (achievedAtCurrentLvl === currentLevelLength){
          console.log(`Level ${milestoneIndex + 1} achieved`);
          this.advanceLevel();
    } else if (!displayedMilestones.length) {
      console.log('Submit Payload: ', payload);
    }
  }

  // Removes a milestone
  handleMilestoneResponse({milestoneId, achieved, evaluatedUserId}) {
      var achievedMilestones = this.state.achievedMilestones;
      var rejectedMilestones = this.state.rejectedMilestones;
      var { payload } = this.state;

      // Filters out the submitted milestone evaluated
      let milestoneObject = getObjectById(milestoneId, this.normalizedMilestones);
      let filteredMilestones = this.state.displayedMilestones.filter(value => value !== milestoneObject);
      this.setState({displayedMilestones: filteredMilestones});
      
      // Handle milestone responses
      let { achievedAtCurrentLvl } = this.state;
      // Conditional logic to change state if a milestone is achieved
      if (achieved) {
        achievedMilestones.push({milestoneId, achieved, evaluatedUserId});
        payload.push({milestoneId, achieved, evaluatedUserId});
        this.setState({
          achievedAtCurrentLvl: achievedAtCurrentLvl + 1,
          achievedMilestones,
          payload
        })

        // Handle rejected responses
      } else {
        rejectedMilestones.push({milestoneId, achieved, evaluatedUserId});
        payload.push({milestoneId, achieved, evaluatedUserId});
        this.setState({rejectedMilestones, payload})
      }
      
  }

  // Reset milestones
  resetMilestones () {
    this.setState({ 
      displayedMilestones: this.currentMilestones[0],
      achievedMilestones: [],
      rejectedMilestones: [],
      milestoneIndex: 0,
      achievedAtCurrentLvl: 0,
      currentLevelLength: this.currentMilestones[0].length
     })
  }

  // Advance level if all milestones in current level are completed
  advanceLevel () {
    let { milestoneIndex } = this.state;
    let newIndex = milestoneIndex + 1;

    // Exit function if there are no more levels
    if (!this.currentMilestones[newIndex]) { console.log('No more levels'); return; }

    this.setState({
      displayedMilestones: this.currentMilestones[newIndex],
      milestoneIndex: newIndex,
      currentLevelLength: this.currentMilestones[newIndex].length,
      achievedAtCurrentLvl: 0
    })
  }

  render() { 
    return (
      <Router>
        <div>
          <span>
            <button onClick={this.resetMilestones}><Link to="/students">Student List</Link></button>
            <button onClick={this.resetMilestones}>Reset Milestones</button>
          </span>
          <Route path='/students' render={props => <StudentList {...props} students={students}/>} />
          <Route path='/user/:id' render={props => <StudentPage {...props} students={students} milestones={this.state.displayedMilestones} handleMilestoneResponse={this.handleMilestoneResponse} />} />
        </div>
      </Router>
    );
  }
}

export default App;
