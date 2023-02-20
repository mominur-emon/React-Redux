import React, { useState } from "react";
import User from "./User";

const Users = () => {
  const [userName, setUserName] = useState("Emon");
  const [userId, setUserId] = useState(136);

  return (
    <>
      <User userName={userName} userId={userId} />
    </>
  );
};

export default Users;
