import "./App.css";
import React, { useState } from "react";
import Message from "./components/Message";
function App() {
  const [count, setCount] = useState(0);
  console.log("app rendering");
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <Message />
    </div>
  );
}

export default App;
