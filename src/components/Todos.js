const Todos = (props) => (
  <div>
    <h1> TODOS LIST </h1>
    <ul style={{ "list-style-type": "none" }}>
      {props.todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  </div>
);

export default Todos;
