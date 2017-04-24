import React, { Component } from 'react';

class MilestoneCard extends Component {
    handleClick = () => {
        this.props.handleSubmit(this.props.id);
    }

    render() {
        const { description } = this.props;
        return (
            <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp milestone-card">
            {description}
            <div className="milestone-button">
                <button 
                    className="mdl-button mdl-js-button mdl-button--primary"
                    onClick={this.handleClick}
                >Close</button>
            </div>
            </div>
        );
    }
}

export default MilestoneCard;