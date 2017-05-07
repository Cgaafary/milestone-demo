import React from 'react';

export default function MilestoneCard(props) {
    const { description, level } = props;
    function handleYesResponse() {
        const { id } = props;
        props.handleMilestoneResponse({milestone: id, achieved: true,});
    }

    function handleNoResponse() {
        const { id } = this.props;
        props.handleMilestoneResponse({milestone: id, achieved: false});
    }

    return (
        <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp milestone-card">
        <p><strong>Level { level }</strong></p>
        <p>{description}</p>
        <div className="milestone-button">
            <button
                className="mdl-button mdl-js-button mdl-button--primary"
                onClick={handleNoResponse}
            >No</button>
            <button
                className="mdl-button mdl-js-button mdl-button--primary"
                onClick={handleYesResponse}
            >Yes</button>
        </div>
        </div>
    );
}

// export default MilestoneCard;
