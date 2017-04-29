import React, { Component } from 'react';

class MilestoneCard extends Component {
    handleYesResponse = () => {
        const { id, evaluatedUserId } = this.props;
        this.props.handleMilestoneResponse({milestoneId: id, evaluatedUserId, achieved: true,});
    }

    handleNoResponse = () => {
        const { id, evaluatedUserId } = this.props;
        this.props.handleMilestoneResponse({milestoneId: id, evaluatedUserId, achieved: false});
    }

    render() {
        const { description, level } = this.props;
        return (
            <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp milestone-card">
            <p><strong>Level { level }</strong></p>
            <p>{description}</p>
            <div className="milestone-button">
                <button 
                    className="mdl-button mdl-js-button mdl-button--primary"
                    onClick={this.handleNoResponse}
                >No</button>
                <button 
                    className="mdl-button mdl-js-button mdl-button--primary"
                    onClick={this.handleYesResponse}
                >Yes</button>
            </div>
            </div>
        );
    }
}

export default MilestoneCard;