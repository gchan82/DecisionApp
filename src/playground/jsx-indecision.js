const notesList = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer.",
  options: []
};

const addEvent = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    notesList.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * notesList.options.length);
  const option = notesList.options[randomNum];
  alert(option);
};

const clearList = () => {
  notesList.options = [];
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>{notesList.title}</h1>
      <p>{notesList.subtitle}</p>

      <ol>
        {notesList.options.map(option => (
          <li key={option}>
            <p>{option}</p>
          </li>
        ))}
      </ol>

      <form onSubmit={addEvent}>
        <input type="text" name="option" />

        <button>Add</button>
      </form>

      <button disabled={notesList.options.length === 0} onClick={makeDecision}>
        What's Next?
      </button>

      <button onClick={clearList}>Clear</button>
    </div>
  );
  ReactDOM.render(jsx, document.getElementById("app"));
};
render();
