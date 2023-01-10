import { useState } from "react";

const TodoItem = (props) => {
  const [editing, setEditing] = useState(props.isInEditting);

  const handleDelete = (e) => {
    props.handleDelete(props.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  return (
    <div className="mb-6 bg-rose-400">
      <div className="mb-1">
        {/* show data */}
        <h1>UUID: {props.id}</h1>
        <p> Title is {props.title}</p>
        <p> Status is {props.status}</p>
        <p> Due date is {props.dueDate}</p>
        <p> Priority is {props.priority}</p>
      </div>

      {editing ? (
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="title" />
          <input type="text" placeholder="status" />
          <input type="text" placeholder="due date" />
          <input type="text" placeholder="priority" />
        </form>
      ) : null}

      <button
        className="btn w-32 btn-primary rounded-full"
        onClick={handleDelete}>
        <span className="text-base"> Delete </span>
      </button>
      <button
        className="btn w-32 btn-primary rounded-full"
        onClick={handleEdit}>
        <span className="text-base"> Edit </span>
      </button>
      <button
        className="btn w-32 btn-primary rounded-full"
        onClick={props.addItem}>
        ADDITEM
      </button>
    </div>
  );
};
export default TodoItem;
