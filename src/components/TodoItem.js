const TodoItem = (props) => {
  <>
    <p> Title is {props.title}</p>
    <p> Status is {props.status}</p>
    <p> Due date is {props.dueDate}</p>
    <p> Priority is {props.priority}</p>
  </>;
};

export default TodoItem;
