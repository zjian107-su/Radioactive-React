import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditSetction from "./EditSection";

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleDelete = (e) => {
    props.handleDelete(props.uuid);
  };

  const toggleEdit = () => {
    setEditing(!editing);
  };

  return (
    <div className="mb-6 bg-rose-400 p-4">
      {/* Title and button */}
      <div className="flex flex-wrap justify-between items-center mb-2">
        <p className="text-purple-500 font-semibold text-lg">
          🪪 UUID:
          <span className="text-purple-900">{props.uuid.substring(0, 10)}</span>
        </p>
        <div className="flex gap-2">
          <button
            className="btn w-24 btn-primary rounded-full bg-purple-500 hover:bg-purple-600"
            onClick={handleDelete}>
            <span className="text-sm text-white">Delete</span>
          </button>
          <button
            className="btn w-24 btn-primary rounded-full bg-purple-500 hover:bg-purple-600"
            onClick={toggleEdit}>
            <span className="text-sm text-white">Edit</span>
          </button>
        </div>
      </div>

      {/* Show data */}
      <div className="flex flex-wrap">
        <div className="w-1/2">
          <p>
            🛒 Title:{" "}
            <span className="text-purple-900 font-semibold">{props.title}</span>
          </p>
          <p>
            ✅ Status:{" "}
            <span className="text-purple-900 font-semibold">
              {props.status}
            </span>
          </p>
        </div>
        <div className="w-1/2">
          <p>
            ⏰ Due Date:{" "}
            <span className="text-purple-900 font-semibold">
              {props.dueDate}
            </span>
          </p>
          <p>
            🔥 Priority:{" "}
            <span className="text-purple-900 font-semibold">
              {props.priority}
            </span>
          </p>
        </div>
      </div>

      {/* Edit section */}
      {editing && (
        <EditSetction
          todo={props.todo}
          uuid={props.uuid}
          todos={props.todos}
          addItem={props.addItem}
          setTodos={props.setTodos}
          toggleEdit={toggleEdit}
        />
      )}
    </div>
  );
};

export default TodoItem;
