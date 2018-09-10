let show = true;

const toggler = () => {
  show = !show;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>toggle visibility</h1>
      <button onClick={toggler}>
        {show ? "Show Details" : "Hide Details"}
      </button>
      {!show && (
        <div>
          <p>Here are some details.</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById("app"));
};
render();
