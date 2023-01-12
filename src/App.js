import "./App.css";
import Count from "./components/others/Count";
import { useState, useRef, useEffect } from "react";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import EditSetction from "./components/EditSection";
import { todoData } from "./data/todoData";

function App() {
  const [isInEditting, setIsInEditting] = useState(false);
  const [todos, setTodos] = useState(todoData);

  const handleDelete = (uuid) => {
    setTodos(todos.filter((todo) => todo.uuid !== uuid));
  };

  const toggleEdit = () => {
    setIsInEditting(!isInEditting);
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
            className="btn w-32 btn-primary rounded-full mb-4"
            onClick={toggleEdit}>
            ADDITEM
          </button>
        )}

        {/* Edit section */}
        {isInEditting ? (
          <EditSetction
            toggleEdit={toggleEdit}
            todos={todos}
            addItem={addItem}
            setTodos={setTodos}
          />
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
