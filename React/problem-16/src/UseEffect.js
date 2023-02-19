import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   //calls with every rendering
  //   console.log("useEffect");
  // });
  // useEffect(() => {
  //   //calls withs first rendering and depend on count
  //   console.log("useEffect");
  // }, [count]);
  useEffect(() => {
    //calls withs first rendering
    console.log("useEffect");
  }, []);
  return (
    <div>
      {console.log("rendering")}
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default UseEffect;
