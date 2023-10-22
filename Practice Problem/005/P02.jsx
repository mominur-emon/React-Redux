import { useReducer } from "react";

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    case "reset":
      return { counter: initialState.counter };
    default:
      return state;
  }
};

const Component1 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Counter : {count.counter}</h1>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "increment",
          })
        }
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "decrement",
          })
        }
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "reset",
          })
        }
      >
        Reset
      </button>
    </div>
  );
};

export default Component1;
