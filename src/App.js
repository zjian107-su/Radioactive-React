import "./App.css";
import Count from "./components/others/Count";
import { useState } from "react";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
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
    console.log("deleting...");
    setTodos(todos.filter((todo) => todo.uuid !== uuid));
    console.log(uuid);
  };

  const addItem = () => {
    const newTodo = {
      uuid: uuidv4(),
      title: "Go to the gym",
      status: "Completed",
      dueDate: "14/7/2023",
      priority: "Low priority",
    };

    setTodos([newTodo, ...todos]);
  };

  const finishEdit = (newTodo, uuid) => {
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
      {/* <Header />
      <Body01 content="content01" />
      <Body02 value={5} />
      <Body03 context="I am cool" />
      <Body04 content="I am cool too!" /> */}
      {/* <Count /> */}
      <div className="App">
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          addItem={addItem}
          finishEdit={finishEdit}
        />
      </div>
    </div>
  );
}

export default App;
