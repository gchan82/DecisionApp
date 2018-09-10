let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
//Challenge - Make a button '-1'
const minusOne = () => {
  count--;
  renderCounterApp();
};

const reset = () => {
  count = 0;
  renderCounterApp();
};

const toScreen = document.getElementById("app2");

const renderCounterApp = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(template2, toScreen);
};

renderCounterApp();
