class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
      //["Thing one", "thing two", "thing three"]
    };
  }
  //deleteOptions
  deleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  //handlePick - pass down to Action and setup onClick - bind here.
  //randomly pick an option and alert it
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return "Please enter something";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This item already exists.";
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat([option])
      };
    });
  }

  render() {
    // const title = "Indecision";
    const subtitle = "Put Your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          deleteOptions={this.deleteOptions}
        />
        <AddOption options handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

const Action = props => {
  return (
    <div>
      <h1>Hello, Human!</h1>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.deleteOptions}>Clear</button>
      {props.options.map(option => (
        <Option key={option} optionText={option} />
      ))}

      <Option />
    </div>
  );
};

const Option = props => {
  {
    return <div> {props.optionText} </div>;
  }
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error: error
      };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <IndecisionApp options={["devil's den", "second choice"]} />,
  document.getElementById("app")
);