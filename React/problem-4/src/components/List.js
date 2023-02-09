import React from "react";
import { v4 as uuidv4 } from "uuid";

const todos = [
  {
    title: "todo1",
    des: "todo1 description 1",
  },
  {
    title: "todo2",
    des: "todo2 description 1",
  },
  {
    title: "todo3",
    des: "todo3 description 1",
  },
];

const List = () => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={uuidv4()}>
            <h3>{todo.title}</h3>
            <p>{todo.des}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
