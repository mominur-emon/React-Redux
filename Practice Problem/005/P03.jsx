import { useReducer } from "react";

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + action.value };
    case "decrement":
      return { counter: state.counter - action.value };
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
            value: 5,
          })
        }
      >
        Increment by 5
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "increment",
            value: 10,
          })
        }
      >
        Increment by 10
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "decrement",
            value: 2,
          })
        }
      >
        Decrement by 2
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
