import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoItem = (props) => {
  const title = useRef();
  const status = useRef();
  const dueDate = useRef();
  const priority = useRef();

  const [editing, setEditing] = useState(props.isInEditting);

  const handleDelete = (e) => {
    props.handleDelete(props.id);
  };

  const handleEdit = () => {
    setEditing(true);
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
    props.finishEdit(newTodo, props.id);
    setEditing(false);
  };

  return (
    <div className="mb-6 bg-rose-400 p-4">
      <div className="flex flex-wrap justify-between items-center mb-2">
        {/* UUID */}
        <p className="text-gray-600 text-sm">
          UUID: <span className="text-gray-900">{props.id}</span>
        </p>
        <div className="flex gap-2">
          <button
            className="btn w-24 btn-primary rounded-full"
            onClick={handleDelete}>
            <span className="text-sm">Delete</span>
          </button>
          <button
            className="btn w-24 btn-primary rounded-full"
            onClick={handleEdit}>
            <span className="text-sm">Edit</span>
          </button>
        </div>
      </div>

      {/* Show data */}
      <div className="flex flex-wrap gap-2">
        <div className="w-1/2">
          <p className="text-sm">
            Title: <span className="text-gray-900">{props.title}</span>
          </p>
          <p className="text-sm">
            Status: <span className="text-gray-900">{props.status}</span>
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-sm">
            Due Date: <span className="text-gray-900">{props.dueDate}</span>
          </p>
          <p className="text-sm">
            Priority: <span className="text-gray-900">{props.priority}</span>
          </p>
        </div>
      </div>

      {/* Edit section */}
      {editing && (
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
      )}
    </div>
  );
};

export default TodoItem;
