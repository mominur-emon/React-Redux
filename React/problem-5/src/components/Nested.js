import React from "react";
import { v4 as uuidv4 } from "uuid";

const users = [
  {
    name: " Mominur Rahman Emon",
    age: 24,
    phones: [{ home: "0172666662" }, { office: "2464858522" }],
  },
  {
    name: " Rifat ahmed",
    age: 20,
    phones: [{ home: "01726566662" }, { office: "2464855512" }],
  },
];

const Nested = () => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={uuidv4()}>
            <h3>{user.name}</h3>
            <p>{user.age}</p>
            {user.phones.map((phn) => {
              return (
                <div key={uuidv4()}>
                  <p>{phn.home}</p>
                  <p>{phn.office}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Nested;
