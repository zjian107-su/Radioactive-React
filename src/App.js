import "./App.css";
import Body01 from "./components/bodies/Body01";
import Body02 from "./components/bodies/Body02";
import Body03 from "./components/bodies/Body03";
import Body04 from "./components/bodies/Body04";

// import Header from "./components/Header";
import Todos from "./components/Todos";
import Count from "./components/others/Count";


const todos = [
  "Buy groceries is Not started. Due on 13/9/2023. High priority.",
  "Buy bread is Not started. Due on 13/9/2023. High priority.",
  "Buy milk is Not started. Due on 13/9/2023. High priority.",
  "Cook dinner is In progress. Due on 14/9/2023. Medium priority.",
  "Wash the dishes is Completed. Due on 14/9/2023. Low priority.",
  "Go to the gym is Completed. Due on 14/7/2023. Low priority.",
];

function App() {
  return (
    <div class="selection:bg-pink-300">
      {/* title */}
      <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
        <span class="mr-2">Daniel's</span>
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <span class="relative text-white tracking-tight">Todo</span>
        </span>
        <span class="ml-2">List.</span>
      </blockquote>

      {/* <Header />
      <Body01 content="content01" />
      <Body02 value={5} />
      <Body03 context="I am cool" />
      <Body04 content="I am cool too!" /> */}

      {/* <Count /> */}
      <div className="App">
        <Todos todos={todos} />
      </div>
    </div>
  );
}

export default App;
