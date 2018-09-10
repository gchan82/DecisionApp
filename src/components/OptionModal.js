import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal

        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOptionModal}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Next Task:</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button--modal" onClick={props.handleClearSelectedOptionModal}>Done</button>
    </Modal>
);

export default OptionModal;
