import "./App.css";
import Count from "./components/others/Count";
import { useState, useRef, useEffect } from "react";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import EditSetcion from "./components/EditSection";

function App() {
  const [isInEditting, setIsInEditting] = useState(false);
  const [todos, setTodos] = useState([
    {
      uuid: uuidv4(),
      title: "Buy groceries",
      status: "Not started",
      dueDate: "13/9/2023",
      priority: "High priority",
    },
    {
      uuid: uuidv4(),
      title: "Buy bread",
      status: "Not started",
      dueDate: "13/9/2023",
      priority: "High priority",
    },
    {
      uuid: uuidv4(),
      title: "Buy milk",
      status: "Not started",
      dueDate: "13/9/2023",
      priority: "High priority",
    },
    {
      uuid: uuidv4(),
      title: "Cook dinner",
      status: "In progress",
      dueDate: "14/9/2023",
      priority: "Medium priority",
    },
    {
      uuid: uuidv4(),
      title: "Wash the dishes",
      status: "Completed",
      dueDate: "14/9/2023",
      priority: "Low priority",
    },
    {
      uuid: uuidv4(),
      title: "Go to the gym",
      status: "Completed",
      dueDate: "14/7/2023",
      priority: "Low priority",
    },
  ]);

  // one useState using one object
  const title = useRef();
  const status = useRef();
  const dueDate = useRef();
  const priority = useRef();

  const handleDelete = (uuid) => {
    console.log("deleting...");
    setTodos(todos.filter((todo) => todo.uuid !== uuid));
    console.log(uuid);
  };

  const startAdd = (event) => {
    setIsInEditting(true);
  };

  const addItem = (todo) => {
    console.log(todo);

    const newTodo = {
      uuid: uuidv4(),
      title: todo.title,
      status: todo.status,
      dueDate: todo.dueDate,
      priority: todo.priority,
    };

    setTodos([newTodo, ...todos]);
  };

  const finishEdit = (e, newTodo, uuid = "") => {
    e.preventDefault();
    // for adding new todo
    if (uuid === "") {
      console.log("here");
      addItem(newTodo);
      return;
    }

    // for editing todo
    todos.map((todo) => {
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
    setTodos([...todos]);
    return;
  };

  return (
    <div>
      <EditSetcion
        isInEditting={true}
        todo={todos}
        addItem={addItem}
        setTodos={setTodos}></EditSetcion>
      <div className="selection:bg-pink-300">
        {/* title */}
        <blockquote className="text-2xl font-semibold italic text-center mb-6">
          <span className="mr-2">Daniel's</span>
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative text-white tracking-tight">Todo</span>
          </span>
          <span className="ml-2">List.</span>
        </blockquote>

        {/* Add Item */}
        {/* <div className="bg-emerald-500 mb-5 App p-4">
          {isInEditting ? null : (
            <button
              className="btn w-32 btn-primary rounded-full"
              onClick={startAdd}>
              ADDITEM
            </button>
          )} */}

        {/* Edit section */}
        {/* {isInEditting ? (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                finishEdit(event, {
                  title: title.current.value,
                  status: status.current.value,
                  dueDate: dueDate.current.value,
                  priority: priority.current.value,
                });
              }}
              className="mt-4">
              <ul>
                <li className="mb-2">
                  <label htmlFor="title" className="text-sm font-semibold">
                    Title:
                  </label>
                  <input
                    type="text"
                    placeholder="Title Example"
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
                    placeholder="Status Example"
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
                    placeholder="Due Date Example"
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
                    placeholder="Priority Example"
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
          ) : null}
        </div> */}

        <div className="App">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            addItem={addItem}
            finishEdit={finishEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
