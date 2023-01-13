import React, { useEffect } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  useEffect(() => {
    console.log(props.todos);
  }, [props.todos]);

  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {props.todos.map((todo) => (
          <div key={todo.uuid}>
            <TodoItem
              todo={todo}
              uuid={todo.uuid}
              title={todo.title}
              status={todo.status}
              dueDate={todo.dueDate}
              priority={todo.priority}
              handleDelete={props.handleDelete}
              finishEdit={props.finishEdit}
              todos={props.todos}
              addItem={props.addItem}
              setTodos={props.setTodos}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
