import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosAction";

const Todos = () => {
  //   useSelector((state) => console.log(state)); /*check it console velue get or not */
  const { isLoading, todos, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <h1>Todos APP</h1>
      {isLoading && <h3>Loading.....</h3>}
      {error && <h3>{error.message}</h3>}

      <section>
        {todos &&
          todos.map((todo) => {
            const { id, title } = todo;
            return (
              <article key={id}>
                <h5>{id}</h5>
                <p>{title}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Todos;
