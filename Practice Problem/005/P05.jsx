import { useReducer } from "react";

const initialState1 = 0;
const initialState2 = 5;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const Component1 = () => {
  const [count1, dispatch1] = useReducer(reducer, initialState1);
  const [count2, dispatch2] = useReducer(reducer, initialState2);

  return (
    <div>
      <div>
        <h1>Count-1 : {count1}</h1>
        <button type="button" onClick={() => dispatch1("increment")}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch1("decrement")}>
          Decrement
        </button>
      </div>
      <div>
        <h1>Count-2 : {count2}</h1>
        <button type="button" onClick={() => dispatch2("increment")}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch2("decrement")}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Component1;
