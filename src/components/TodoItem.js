const TodoItem = (props) => (
  <div>
    <h2>THE ID IS: {props.id}</h2>
    <p> Title is {props.title}</p>
    <p> Status is {props.status}</p>
    <p> Due date is {props.dueDate}</p>
    <p> Priority is {props.priority}</p>
  </div>
);

export default TodoItem;
