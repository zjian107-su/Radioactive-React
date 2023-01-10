import React, { useEffect } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  useEffect(() => {
    console.log("MILK");
  }, [props.todos]);

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
              isInEditting={false}
              addItem={props.addItem}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
