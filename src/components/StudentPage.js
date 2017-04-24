import React, { Component } from 'react';
// import AppBar from 'material-ui/AppBar';

// Custom Components
import MilestoneCard from './MilestoneCard';
// import StudentHeader from './StudentHeader';

// Import fake milestones
import milestones from '../fakedata/milestones';

class StudentPage extends Component {
    constructor(props) {
        super(props);
        this.normalizedMilestones = this.normalizeNode(milestones);

        this.removeCard = this.removeCard.bind(this);

        this.state = {milestones: this.normalizedMilestones}
    }

    // Removes a card
    removeCard(input) {
        console.log(`The current user's id is ${input}`);
        let milestoneObject = this.getObjectById(input, this.normalizedMilestones);
        let filteredMilestones = this.state.milestones.filter(value => value !== milestoneObject);
        this.setState({milestones: filteredMilestones});
    }

    // Renders milestone cards with descriptions
    renderMilestoneCards(milestones) { 
        return (
        milestones.map(({level, description, id}) => (
            <MilestoneCard description={description} level={level} key={id} id={id} handleSubmit={this.removeCard} />
        ))
    );
    }

    // Normalizes the object provided by scaphold.io
    normalizeNode (nodeArray) {
        let normalizedObject = nodeArray.map(({node}) => node);
        return normalizedObject;
    }

    // Returns a user object given a user array and an id
    getObjectById (id, objects) {
        let arrayOfObjectIds = objects.map(object => object.id);
        let indexOfId = arrayOfObjectIds.indexOf(id);
        return objects[indexOfId];
    }

    render() {
        let currentUserId = this.props.match.params.id;
        let currentUser = this.getObjectById(currentUserId, this.props.students);

        return (
            <div>
            <h3>Current student is {currentUser.firstName} {currentUser.lastName}</h3>
            <div className="mdl-grid mdl-layout__content">{this.renderMilestoneCards(this.props.milestones)}</div>
            </div>
        ); 
    }
}

export default StudentPage;