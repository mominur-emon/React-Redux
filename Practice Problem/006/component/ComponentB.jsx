import { useContext } from "react";
import { counterContext } from "../src/App";

const ComponentB = () => {
  const countContext = useContext(counterContext);

  return (
    <div>
      <h1>Component B</h1>
      <button type="button" onClick={() => countContext.dispatch("increment")}>
        Increment
      </button>
      <button type="button" onClick={() => countContext.dispatch("decrement")}>
        decrement
      </button>
      <button type="button" onClick={() => countContext.dispatch("reset")}>
        reset
      </button>
    </div>
  );
};

export default ComponentB;
