import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => (
  <div>
    <h1>TODO LIST</h1>
    <p>{JSON.stringify(props)}</p>
    <ul
      style={{ listStyleType: "none" }}
      role="list"
      className="marker:text-sky-100 list-disc pl-5 space-y-3 text-slate-800">
      {/* {props.todos.map((todo, index) => (
        <li key={index}>{todo}</li>
        <TodoItem {}>
      ))} */}
      {/* {props.todos.map((todo, index) => (
        <TodoItem key={index} {...todo} />
      ))} */}
    </ul>
  </div>
);

export default TodoList;
