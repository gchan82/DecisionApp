class VisToggle extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.state = {
      show: false
    };
  }
  changeState() {
    this.setState(prevState => {
      return {
        show: !prevState.show
      };
    });
  }

  render() {
    return (
      <div>
        <h1>toggle visibility</h1>
        <button onClick={this.changeState}>
          {this.state.show ? "Show Details" : "Hide Details"}
        </button>
        {!this.state.show && (
          <div>
            <p>Here are some details.</p>
          </div>
        )}
      </div>
    );
  }
}
ReactDOM.render(<VisToggle />, document.getElementById("app"));
