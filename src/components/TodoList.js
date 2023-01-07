import React from "react";
import TodoItem from "./TodoItem";


const TodoList = (props) => {
  const { parentFunc } = props;

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
              childFunc={parentFunc}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
