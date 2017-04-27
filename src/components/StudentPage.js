import React, { Component } from 'react';
// import AppBar from 'material-ui/AppBar';

// Custom Components
import MilestoneCard from './MilestoneCard';
import { getObjectById } from '../customFunctions';

class StudentPage extends Component {
    // Renders milestone cards with descriptions
    renderMilestoneCards(milestones) { 
        let currentUserId = this.props.match.params.id;
        return (
        milestones.map(({level, description, id}) => (
            <MilestoneCard 
                description={description} 
                level={level}
                key={id} 
                id={id}
                evaluatedUserId={currentUserId} 
                handleMilestoneResponse={this.props.handleMilestoneResponse} />
        ))
    );
    }

    render() {
        let { students, milestones, match: { params } } = this.props;
        let currentUserId = params.id;
        let currentUserObject = getObjectById(currentUserId, students);
        let { firstName, lastName } = currentUserObject;

        return (
            <div>
            <h3>Current student is {firstName} {lastName}</h3>
            <div className="mdl-grid mdl-layout__content">{this.renderMilestoneCards(milestones)}</div>
            </div>
        ); 
    }
}

export default StudentPage;