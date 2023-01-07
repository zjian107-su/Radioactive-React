const Todos = (props) => (
  <div>
    <ul
      style={{ "list-style-type": "none" }}
      role="list"
      className="marker:text-sky-100 list-disc pl-5 space-y-3 text-slate-800">
      {props.todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  </div>
);

export default Todos;
