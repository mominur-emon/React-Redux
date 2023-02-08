import React from "react";
import Card from "./components/Card";
import Data from "./data.json";

function App() {
  //let items = [];
  // for (let i = 0; i < Data.length; i++) {
  //   items.push(
  //     <Card key={i} todoTitle={Data[i].title} todoDescription={Data[i].desc} />
  //   );
  // } //using for loop
  return (
    <div>
      <h1 className="hStyle">Todo App</h1>
      {/* {items} //using for loop */}
      {/* below using mapping */}
      {Data.map((item, index) => (
        <Card key={index} todoTitle={item.title} todoDescription={item.desc} />
      ))}
    </div>
  );
}

export default App;
