import React from "react";
import Card from "./components/Card";
import Data from "./data.json";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <div>
      <h1 className="hStyle">Practice one </h1>
      {Data.map((item) => (
        <Card key={uuidv4()} p={item.title} q={item.des} />
      ))}
      <Card />
    </div>
  );
}

export default App;
