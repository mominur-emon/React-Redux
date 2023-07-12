import React from "react";
import Card from "./components/Card";
import Data from "./data.json";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <div>
      <h1 className="hStyle">Practice one </h1>
      {Data.map((user) => (
        <div key={uuidv4()}>
          <Card p={user.name} q={user.age} />
          {user.phones.map((phone) => (
            <Card key={uuidv4()} p={phone.homePhone} q={phone.cellPhone} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
