import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

// arrow function
const Body01 = () => (
  <div className="App">
    <h1>You are awesome</h1>
  </div>
);

const Body02 = () => (
  <div className="App">
    <h1>You are best</h1>
  </div>
);

// class declaration
class ThirdBody extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.context}</h1>
      </div>
    );
  }
}

const FourthBody = (props) => (
  <div className="App">
    <h1>{props.content}</h1>
  </div>
);

// function declaration
function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bombastic Bro</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

const Todos = () => (
  <ul>
    <li>Learn React</li>
    <li>Learn Redux</li>
    <li>Learn React Router</li>
    <li>Learn React Native</li>
  </ul>
);

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Body01 content="content01" />
      <Body02 value={5} />
      <ThirdBody context="I am cool" />
      <FourthBody content="I am cool too!" />
      <Todos />
    </div>
  );
}

export default App;
