import React from 'react';

const Action = props => (
    <div>
        <h1>What would you like to do?</h1>
        <button className="big-button" onClick={props.handlePick} disabled={!props.hasOptions}>
            Tell me what to do.
    </button>
    </div>
);

export default Action;