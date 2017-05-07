import React from 'react';

export default function MilestoneCard(props) {
    const { description, level } = props;

    function handleYesResponse() {
        const { id } = props;
        props.handleMilestoneResponse({milestone: id, achieved: true,});
    }

    function handleNoResponse() {
        const { id } = props;
        props.handleMilestoneResponse({milestone: id, achieved: false});
    }

    return (
        <div>
        <p><strong>Level { level }</strong></p>
        <p>{description}</p>
        <div>
            <button
                onClick={handleNoResponse}
            >No</button>
            <button
                onClick={handleYesResponse}
            >Yes</button>
        </div>
        </div>
    );
}
