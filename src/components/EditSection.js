import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const EditSetcion = (props) => {
  const [editing, setEditing] = useState(props.isInEditting);

  const title = useRef();
  const status = useRef();
  const dueDate = useRef();
  const priority = useRef();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      uuid: uuidv4(),
      title: title.current.value,
      status: status.current.value,
      dueDate: dueDate.current.value,
      priority: priority.current.value,
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
              type="text"
              placeholder={props ? props.title : "Title Example"}
              ref={title}
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
            />
          </li>
          <li className="mb-2">
            <label htmlFor="status" className="text-sm font-semibold">
              Status:
            </label>
            <input
              type="text"
              placeholder={props ? props.status : "Status Example"}
              ref={status}
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
            />
          </li>
          <li className="mb-2">
            <label htmlFor="dueDate" className="text-sm font-semibold">
              Due Date:
            </label>
            <input
              type="text"
              placeholder={props ? props.dueDate : "Due Date Example"}
              ref={dueDate}
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
            />
          </li>
          <li className="mb-2">
            <label htmlFor="priority" className="text-sm font-semibold">
              Priority:
            </label>
            <input
              type="text"
              placeholder={props ? props.priority : "Priority Example"}
              ref={priority}
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

export default EditSetcion;
