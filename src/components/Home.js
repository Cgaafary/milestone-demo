import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { graphql } from 'react-apollo';

// Custom Components
import StudentList from './StudentList';
import StudentPage from './StudentPage';
import { getObjectById, reformatArrayByLevel } from '../customFunctions';

// Import real data
import getMilestones from '../data/queries/getMilestones';

class Home extends Component {
  constructor() {
    super();

    // Binding Methods
    this.resetMilestones = this.resetMilestones.bind(this);
    this.handleMilestoneResponse = this.handleMilestoneResponse.bind(this);
    this.advanceLevel = this.advanceLevel.bind(this);
    this.submitPayload = this.submitPayload.bind(this);

    this.state = {
      currentMilestones: [], 
      displayedMilestones: [],
      payload: [],
      milestoneIndex: 0,
      achievedAtCurrentLvl: 0,
      currentLevelLength: []
     }
  }

  componentWillReceiveProps(nextProps) {
    const { loading, allMilestones } = nextProps.data;
    if (!loading) { 
      console.log(allMilestones);
      const milestonesByLevel = reformatArrayByLevel(allMilestones);
      this.setState({
        currentMilestones: milestonesByLevel,
        displayedMilestones: milestonesByLevel[0],
        currentLevelLength: milestonesByLevel[0].length
      })
    }
  }

  componentDidUpdate() {
    const { achievedAtCurrentLvl, currentLevelLength, displayedMilestones, milestoneIndex } = this.state;
    if (achievedAtCurrentLvl === currentLevelLength) {
          console.log(`Level ${milestoneIndex + 1} achieved`);
          this.advanceLevel();
    } else if (!displayedMilestones.length) {
          this.submitPayload();
    }
  }

  // Removes a milestone
  handleMilestoneResponse({milestone, achieved, evaluatedUser}) {
      var { payload, displayedMilestones, achievedAtCurrentLvl } = this.state;
      const evaluatingUser = 'Add later';

      // Filters out the submitted milestone evaluated
      const milestoneObject = getObjectById(milestone, displayedMilestones);
      const filteredMilestones = displayedMilestones.filter(value => value !== milestoneObject);
      this.setState({displayedMilestones: filteredMilestones});
      
      // Conditional logic to change state if a milestone is achieved
      if (achieved) {
        payload.push({milestone, achieved, evaluatedUser, evaluatingUser});
        this.setState({
          achievedAtCurrentLvl: achievedAtCurrentLvl + 1,
          payload
        });

        // Handle rejected responses
      } else {
        payload.push({milestone, achieved, evaluatedUser, evaluatingUser});
        this.setState({payload});
      }
      
  }

  // Reset milestones
  resetMilestones () {
    this.setState({ 
      displayedMilestones: this.state.currentMilestones[0],
      payload: [],
      milestoneIndex: 0,
      achievedAtCurrentLvl: 0,
      currentLevelLength: this.state.currentMilestones[0].length
     })
  }

  // Advance level if all milestones in current level are completed
  advanceLevel () {
    const { milestoneIndex, currentMilestones } = this.state;
    const newIndex = milestoneIndex + 1;

    // Exit function if there are no more levels
    if (!currentMilestones[newIndex]) { 
      console.log('Completed all levels');
      this.submitPayload();
      return; 
    }

    this.setState({
      displayedMilestones: currentMilestones[newIndex],
      milestoneIndex: newIndex,
      currentLevelLength: currentMilestones[newIndex].length,
      achievedAtCurrentLvl: 0
    })
  }

  submitPayload() {
    console.log('Submit Payload:', this.state.payload);
  }

  render() { 
    const { loading, allUsers } = this.props.data;
    if (loading) { return <div>Loading...</div> }
    return (
      <Router>
        <div>
          <span>
            <button onClick={this.resetMilestones}><Link to="/students">Student List</Link></button>
            <button onClick={this.resetMilestones}>Reset Milestones</button>
          </span>
          <Route path='/students' render={props => <StudentList {...props} students={allUsers}/>} />
          <Route path='/user/:id' render={props => <StudentPage {...props} students={allUsers} milestones={this.state.displayedMilestones} handleMilestoneResponse={this.handleMilestoneResponse} />} />
        </div>
      </Router>
    );
  }
}

export default graphql(getMilestones)(Home);
