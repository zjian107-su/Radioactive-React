import "./App.css";
import Body01 from "./components/bodies/Body01";
import Body02 from "./components/bodies/Body02";
import Body03 from "./components/bodies/Body03";
import Body04 from "./components/bodies/Body04";

// import Header from "./components/Header";
import Todos from "./components/Todos";
import Count from "./components/others/Count";

function App() {
  return (
    <div>
      {/* <Header />
      <Body01 content="content01" />
      <Body02 value={5} />
      <Body03 context="I am cool" />
      <Body04 content="I am cool too!" /> */}

      {/* <Count /> */}
      <div className="App">
        <Todos />
      </div>
    </div>
  );
}

export default App;
