const TodoItem = (props) => {
  const handleDelete = (e) => {
    console.log(`deleting...item of id: + ${props.id}`);
  };

  const handleEdit = () => {
    console.log(`editting item of id: + ${props.id}`);
  };

  const { grandpaFunc } = props;

  return (
    <div className="mb-6">
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
      <button
        className="btn w-32 btn-primary rounded-full"
        onClick={grandpaFunc}>
        <span className="text-base"> Chain </span>
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
