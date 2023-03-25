import "./App.css";
import React, { useCallback, useState } from "react";
import Message from "./components/Message";
function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  console.log("app rendering");

  const handleIncMsg = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      {toggle ? "on" : "off"}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      <h1>count:{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <Message msgOfCount={count} onHandleInc={handleIncMsg} />
    </div>
  );
}

export default App;
