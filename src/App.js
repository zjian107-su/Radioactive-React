import "./App.css";
import Body01 from "./components/bodies/Body01";
import Body02 from "./components/bodies/Body02";
import Body03 from "./components/bodies/Body03";
import Body04 from "./components/bodies/Body04";

// import Header from "./components/Header";
import Count from "./components/others/Count";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

const todos2 = [
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
];

const handleDelete = (uuid) => {
  // if todos2.include(uuid) {
  //   console.log(`deleting...item of id: + ${uuid}`);
  // }

  console.log(`deleting...item of id: + ${uuid}`);
};

const addItem = () => {
  const newTodo = {
    uuid: uuidv4(),
    title: "Go to the gym",
    status: "Completed",
    dueDate: "14/7/2023",
    priority: "Low priority",
  };

  todos2.unshift(newTodo);
  console.log(todos2);
};

const grandpaFunc = () => {
  console.log("grandpaFunc");
};

function App() {
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
        <TodoList todos={todos2} grandpaFunc={grandpaFunc} addItem={addItem} />
      </div>
    </div>
  );
}

export default App;
