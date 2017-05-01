import React, { Component } from 'react';
import { graphql } from 'react-apollo';

// Custom Components
import MilestoneCard from './MilestoneCard';

// Data Import
import getUserById from '../data/queries/getUserById';

class StudentPage extends Component {
    // Renders milestone cards with descriptions
    renderMilestoneCards(milestones) { 
        var evaluatedUser = this.props.match.params.id;
        return (
        milestones.map(({level, description, id}) => (
            <MilestoneCard 
                description={description} 
                level={level}
                key={id} 
                id={id}
                evaluatedUser={evaluatedUser} 
                handleMilestoneResponse={this.props.handleMilestoneResponse} />
        ))
    );
    }

    render() {
        const { loading, User = {} } = this.props.data;
        const { milestones } = this.props;
        if (loading) { return <div>Loading...</div> }
        return (
            <div>
            <h3>Current student is {User.fullName}</h3>
            <div className="mdl-grid mdl-layout__content">{this.renderMilestoneCards(milestones)}</div>
            </div>
        ); 
    }
}

export default graphql(getUserById, {
    options: ({match}) => ({ variables: { id: match.params.id }})
})(StudentPage);