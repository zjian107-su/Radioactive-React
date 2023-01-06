import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => (
  <div>
    <ul
      style={{ listStyleType: "none" }}
      role="list"
      className="marker:text-sky-100 list-disc pl-5 space-y-3 text-slate-800">
      {props.todos.map((todo, index) => (
        <div key={index}>
          <TodoItem
            id={index}
            title={todo.title}
            status={todo.status}
            dueDate={todo.dueDate}
            priority={todo.priority}
          />
        </div>
      ))}
    </ul>
  </div>
);

export default TodoList;
