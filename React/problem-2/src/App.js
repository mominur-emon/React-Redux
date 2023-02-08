import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <h1 className="hStyle">Todo App</h1>
      <Card
        todoTitle="Call Card"
        todoDescription="Sit lorem invidunt kasd lorem est. Sanctus consetetur. "
      />
      <Card
        todoTitle="Call Child"
        todoDescription=" lorem est. Sanctus consetetur. "
      />
      <Card />
      <Card />
    </div>
  );
}

export default App;
