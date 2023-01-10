import React from "react";
import TodoItem from "./TodoItem";


const TodoList = (props) => {
  console.log(props);

  return (
    <div>
      <ul style={{ listStyleType: "none" }} role="list">
        {props.todos.map((todo) => (
          <div key={todo.uuid}>
            <TodoItem
              id={todo.uuid}
              title={todo.title}
              status={todo.status}
              dueDate={todo.dueDate}
              priority={todo.priority}
              handleDelete={props.handleDelete}
              addItem={props.addItem}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
