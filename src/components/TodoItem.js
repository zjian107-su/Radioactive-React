import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditSection from "./EditSection";

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleDelete = (e) => {
    props.handleDelete(props.id);
  };

  const handleEdit = () => {
    setEditing(true);
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
      {editing ? (
        <EditSection
          todos={props.todos}
          setTodos={props.setTodos}
          id={props.id}
          title={props.title}
          status={props.status}
          dueDate={props.dueDate}
          priority={props.priority}
          finishEdit={props.finishEdit}
        />
      ) : null}
    </div>
  );
};

export default TodoItem;
