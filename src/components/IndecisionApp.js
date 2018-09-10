import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [], //["Thing one: Eat.", "Thing two: Sleep.", "Thing three: Play."]
        selectedOption: undefined

    };

    deleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleClearSelectedOptionModal = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };
    handleDeleteOneItem = (optionToRemove) => {
        this.setState(prevState => ({
            options: prevState.options.filter(option => optionToRemove !== option)
        }));
    };
    //handlePick - pass down to Action and setup onClick - bind here.
    //randomly pick an option and alert it
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return "Please enter something.";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This item already exists.";
        }

        this.setState(prevState => ({
            options: prevState.options.concat([option])
        }));
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            //do nothing at all if JSON data invalid/null.
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }
    componentWillUnmount() {
        console.log("Component will unmount.");
    }

    render() {
        // const title = "Indecision";
        const subtitle = "Put Your life in the hands of a computer";

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <Options
                        options={this.state.options}
                        deleteOptions={this.deleteOptions}
                        handleDeleteOneItem={this.handleDeleteOneItem}
                    />
                    <AddOption options handleAddOption={this.handleAddOption} />
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOptionModal={this.handleClearSelectedOptionModal}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};
