import React from 'react';
import Option from './Option';

const Options = props => (
    <div>
        <h3>Your Options: </h3>

        {props.options.length === 0 && <p>Please add option to get started.</p>}

        {props.options.map(option => (
            <Option
                key={option}
                optionText={option}
                handleDeleteOneItem={props.handleDeleteOneItem}
            />
        ))}

        <button className="button--delete" onClick={props.deleteOptions}>Delete All</button>
    </div>
);

export default Options;