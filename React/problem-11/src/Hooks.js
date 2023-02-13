import React, { useState } from "react";

export default function Hooks() {
  const [count, setCount] = useState(0);

  const handleIncremnet = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncremnet}>Increment</button>
    </div>
  );
}
