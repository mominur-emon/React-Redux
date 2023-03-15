import React, { useState } from "react";
import { Component2 } from "./Component2";

export const Component1 = () => {
  const [user, setUser] = useState({ id: 101, name: "Emon" });
  return (
    <div>
      <Component2 user={user} />
    </div>
  );
};
