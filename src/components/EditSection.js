import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const EditSetction = (props) => {
  const [editing, setEditing] = useState(true);
  const [todoData, setTodoData] = useState({
    uuid: props.todo ? props.todo.uuid : uuidv4(),
    title: props.todo ? props.todo.title : "",
    status: props.todo ? props.todo.status : "",
    dueDate: props.todo ? props.todo.dueDate : "",
    priority: props.todo ? props.todo.priority : "",
  });

  const finishEdit = (newTodo, uuid = "") => {
    if (uuid === "") {
      props.addItem(newTodo);
      return;
    }
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
      return todo;
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
    finishEdit(todoData, props.uuid);
    setEditing(false);
    props.toggleEdit();
  };

  return editing ? (
    <div>
      <form onSubmit={handleSubmit} className="mt-4">
        <ul>
          <li className="mb-2">
            <label htmlFor="title" className="font-semibold">
              Title:
            </label>
            <input
              name="title"
              type="text"
              placeholder={props.todo ? props.todo.title : "Title Example"}
              value={todoData.title}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
            />
          </li>
          <li className="mb-2">
            <label htmlFor="status" className="font-semibold">
              Status:
            </label>
            <input
              type="text"
              name="status"
              placeholder={props.todo ? props.todo.status : "Status Example"}
              value={todoData.status}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
            />
          </li>
          <li className="mb-2">
            <label htmlFor="dueDate" className="font-semibold">
              Due Date:
            </label>
            <input
              type="text"
              name="dueDate"
              placeholder={props.todo ? props.todo.dueDate : "Due Date Example"}
              value={todoData.dueDate}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
            />
          </li>
          <li className="mb-2">
            <label htmlFor="priority" className="font-semibold">
              Priority:
            </label>
            <input
              type="text"
              name="priority"
              placeholder={
                props.todo ? props.todo.priority : "Priority Example"
              }
              value={todoData.priority}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
            />
          </li>
        </ul>

        <button
          type="submit"
          className="w-24 btn btn-primary rounded-full mt-2 mb-4">
          <span className="text-sm">Submit</span>
        </button>
      </form>
    </div>
  ) : (
    <div></div>
  );
};

export default EditSetction;
