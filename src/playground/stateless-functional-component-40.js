const User = props => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age} </p>
    </div>
  );
};

ReactDOM.render(
  <User name="Andrew" age={26} />,
  document.getElementById("app")
);
