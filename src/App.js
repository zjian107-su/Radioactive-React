import "./App.css";
import Count from "./components/others/Count";
import { useState, useRef, useEffect } from "react";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import EditSection from "./components/EditSection";

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

  const handleDelete = (uuid) => {
    setTodos(todos.filter((todo) => todo.uuid !== uuid));
  };

  const startAdd = (event) => {
    setIsInEditting(true);
  };

  const addItem = (todo) => {
    const newTodo = {
      uuid: uuidv4(),
      title: todo.title,
      status: todo.status,
      dueDate: todo.dueDate,
      priority: todo.priority,
    };

    setTodos([newTodo, ...todos]);
  };

  return (
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
      <div className="bg-emerald-500 mb-5 App p-4">
        {isInEditting ? null : (
          <button
            className="btn w-32 btn-primary rounded-full"
            onClick={startAdd}>
            ADDITEM
          </button>
        )}

        {/* Edit section */}
        {isInEditting ? (
          <EditSection
            todos={todos}
            addItem={addItem}
            setTodos={setTodos}></EditSection>
        ) : null}

        <div className="App">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            addItem={addItem}
            setTodos={setTodos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
