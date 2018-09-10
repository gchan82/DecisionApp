// cont lecture l8 7:36
console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["1"]
};

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderFormSubmit();
  }
};

const resetToZero = () => {
  app.options = [];

  renderFormSubmit();
};

//create "Remove All" button above list
//on click -> wipe the array -> rerender

const numbers = [55, 101, 1000];

const toScreen = document.getElementById("app2");

const renderFormSubmit = () => {
  const template2 = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>

      <button onClick={resetToZero}>Remove All</button>
      {numbers.map(number => {
        return <p key={number}>Number: {number}</p>;
      })}
      <ol>
        {/* map over app. options getting back an array of li (set key and text) */}
        {app.options.map(option => {
          return (
            <li key={option}>
              <p>{option}</p>
            </li>
          );
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template2, toScreen);
};

renderFormSubmit();
