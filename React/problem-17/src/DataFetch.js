import React, { useEffect, useState } from "react";

const loadiingMsg = <p>todos is loading</p>;

const DataFetch = () => {
  const [todos, setTodos] = useState(null);
  const [isLodding, setIsLodding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) {
          throw Error("feacthing is not successfull");
        }
        return res.json();
      })
      .then((data) => {
        setTodos(data);
        setIsLodding(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLodding(false);
      });
  }, []);

  const todoElement =
    todos &&
    todos.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  return (
    <div>
      <h1>Todos</h1>
      {error && <p>{error}</p>}
      {isLodding && loadiingMsg}
      {todoElement}
    </div>
  );
};

export default DataFetch;
