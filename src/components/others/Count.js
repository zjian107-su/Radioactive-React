import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  const decrement = () => {
    setCount(count - 1);
    console.log(count);
  };

  console.log("rerendered!");

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Count;
