import { useState } from "react";
import Child from "./Child";

const App = () => {
  const [childData, setChildData] = useState("");

  const handleChildData = (childData) => {
    setChildData(childData);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <Child childData={handleChildData} />
      <p>{childData}</p>
    </div>
  );
};

export default App;
