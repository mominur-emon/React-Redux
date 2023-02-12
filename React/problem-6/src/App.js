import React from "react";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";

export default function App() {
  return (
    <div>
      <Card1 name="CARD-ONE" des="this is card 1" />
      <Card2 name="Card -two" />
    </div>
  );
}
