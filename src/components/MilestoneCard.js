import React, { Component } from 'react';

class MilestoneCard extends Component {
    handleYesResponse = () => {
        this.props.handleMilestoneResponse({id: this.props.id, achieved: true});
    }

    handleNoResponse = () => {
        this.props.handleMilestoneResponse({id: this.props.id, achieved: false})
    }

    render() {
        const { description } = this.props;
        return (
            <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp milestone-card">
            {description}
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