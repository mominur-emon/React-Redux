import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const Component4 = () => {
  const { user, text } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <p>{text}</p>
      <h3>{user.id}</h3>
      <h3>{user.name}</h3>
    </div>
  );
};
