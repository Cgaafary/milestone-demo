import React, { Component } from 'react';
// import AppBar from 'material-ui/AppBar';

// Custom Components
import MilestoneCard from './MilestoneCard';
import { getObjectById } from '../customFunctions';

class StudentPage extends Component {
    // Renders milestone cards with descriptions
    renderMilestoneCards(milestones) { 
        return (
        milestones.map(({level, description, id}) => (
            <MilestoneCard description={description} level={level} key={id} id={id} handleSubmit={this.props.removeMilestone} />
        ))
    );
    }

    render() {
        let currentUserId = this.props.match.params.id;
        let currentUser = getObjectById(currentUserId, this.props.students);

        return (
            <div>
            <h3>Current student is {currentUser.firstName} {currentUser.lastName}</h3>
            <div className="mdl-grid mdl-layout__content">{this.renderMilestoneCards(this.props.milestones)}</div>
            </div>
        ); 
    }
}

export default StudentPage;