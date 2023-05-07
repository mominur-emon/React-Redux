import React from "react";
import Card from "./cmp/Card";
import Data from "./data.json";

function App() {
  return (
    <div>
      {Data.map((item, index) => (
        <Card
          key={index}
          todoTitle={item.title}
          TodoDes={item.des}
          todoAdd={item.address.map((i, x) => {
            return (
              <div key={x}>
                {i.home} {i.area}
              </div>
            );
          })}
        />
      ))}
    </div>
  );
}

export default App;
