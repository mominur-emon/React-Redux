import React from "react";

import Child from "./Child";

export default function App() {
  const handleChildData = (d) => {
    console.log(d);
  };
  return (
    <div>
      <Child onChildData={handleChildData} />
    </div>
  );
}
