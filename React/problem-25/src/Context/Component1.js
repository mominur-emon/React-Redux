import React, { useState } from "react";
import { Component2 } from "./Component2";
import { UserContext } from "./UserContext";
export const Component1 = () => {
  const [user, setUser] = useState({ id: 101, name: "Emon" });
  const [text, setText] = useState("is a single text");
  return (
    <UserContext.Provider value={{ user, text }}>
      <Component2 />
    </UserContext.Provider>
  );
};
