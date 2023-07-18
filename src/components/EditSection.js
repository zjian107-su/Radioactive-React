import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const EditSetction = (props) => {
  const [editing, setEditing] = useState(true);
  const [todoData, setTodoData] = useState({
    uuid: props.id || uuidv4(),
    title: props.title || "",
    status: props.status || "",
    dueDate: props.dueDate || "",
    priority: props.priority || "",
  });

  const finishEdit = (newTodo, uuid = "") => {
    // for adding new todo
    if (uuid === "") {
      props.addItem(newTodo);
      return;
    }

    // for editing todo
    props.todos.map((todo) => {
      if (todo.uuid === uuid) {
        if (newTodo.title !== "") {
          todo.title = newTodo.title;
        }
        if (newTodo.status !== "") {
          todo.status = newTodo.status;
        }
        if (newTodo.dueDate !== "") {
          todo.dueDate = newTodo.dueDate;
        }
        if (newTodo.priority !== "") {
          todo.priority = newTodo.priority;
        }
      }
    });
    props.setTodos([...props.todos]);
    return;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      uuid: uuidv4(),
      title: todoData.title,
      status: todoData.status,
      dueDate: todoData.dueDate,
      priority: todoData.priority,
    };
    console.log(newTodo);
    finishEdit(newTodo, props.id);
    setEditing(false);
  };

  return editing ? (
    <div>
      <form onSubmit={handleSubmit} className="mt-4">
        <ul>
          <li className="mb-2">
            <label htmlFor="title" className="text-sm font-semibold">
              Title:
            </label>
            <input
              name="title"
              type="text"
              placeholder={props ? props.title : "Title Example"}
              value={todoData.title}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
            />
          </li>
          <li className="mb-2">
            <label htmlFor="status" className="text-sm font-semibold">
              Status:
            </label>
            <input
              type="text"
              name="status"
              placeholder={props ? props.status : "Status Example"}
              value={todoData.status}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
            />
          </li>
          <li className="mb-2">
            <label htmlFor="dueDate" className="text-sm font-semibold">
              Due Date:
            </label>
            <input
              type="text"
              name="dueDate"
              placeholder={props ? props.dueDate : "Due Date Example"}
              value={todoData.dueDate}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
            />
          </li>
          <li className="mb-2">
            <label htmlFor="priority" className="text-sm font-semibold">
              Priority:
            </label>
            <input
              type="text"
              name="priority"
              placeholder={props ? props.priority : "Priority Example"}
              value={todoData.priority}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
            />
          </li>
        </ul>

        <button
          type="submit"
          className="w-24 btn btn-primary rounded-full mt-2">
          <span className="text-sm">Submit</span>
        </button>
      </form>
    </div>
  ) : (
    <div></div>
  );
};

export default EditSetction;
