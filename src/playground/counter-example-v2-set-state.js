class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.add1 = this.add1.bind(this);
    this.minus1 = this.minus1.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0
    };
  }

  add1() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
    console.log(this.state.count);
  }
  minus1() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
    console.log(this.props.minus1);
  }
  reset() {
    this.setState(prevStateate => {
      return {
        count: 0
      };
    });
    console.log(this.props.reset);
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.add1}>+1</button>
        <button onClick={this.minus1}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}
ReactDOM.render(<Counter />, document.getElementById("app"));
