import "./App.css";
import Body01 from "./components/Body01";
import Body02 from "./components/Body02";
import Body03 from "./components/Body03";
import Body04 from "./components/Body04";
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Body01 content="content01" />
      <Body02 value={5} />
      <Body03 context="I am cool" />
      <Body04 content="I am cool too!" />
      <Todos />
    </div>
  );
}

export default App;
