import React from 'react';

const Option = (props) => (
    <div className="widget-header option__text">
        {" "}
        {props.optionText}
        <button
            className="button--remove"
            onClick={e => {
                props.handleDeleteOneItem(props.optionText);
            }}
        >
            Remove
  </button>
    </div >
);
export default Option;