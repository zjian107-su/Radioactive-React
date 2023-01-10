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
    <div className="mb-6 bg-rose-400">
      <div className="mb-1">
        {/* show data */}
        <h1>UUID: {props.id}</h1>
        <p> Title is {props.title}</p>
        <p> Status is {props.status}</p>
        <p> Due date is {props.dueDate}</p>
        <p> Priority is {props.priority}</p>
      </div>

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

      {editing ? (
        <div>
          <form onSubmit={handleSubmit} className="mt-2">
            <ul>
              <li>
                <label htmlFor="title">Title: </label>
                <input type="text" placeholder={props.title} ref={title} />
              </li>
              <li>
                <label htmlFor="status">Status: </label>
                <input type="text" placeholder={props.status} ref={status} />
              </li>
              <li>
                <label htmlFor="dueDate">Due date: </label>
                <input type="text" placeholder={props.dueDate} ref={dueDate} />
              </li>
              <li>
                <label htmlFor="priority">Priority: </label>
                <input
                  type="text"
                  placeholder={props.priority}
                  ref={priority}
                />
              </li>
            </ul>
            <button
              type="submit"
              className="w-32 btn btn-primary rounded-full mt-1">
              <span className="text-base"> Submit </span>
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};
export default TodoItem;
