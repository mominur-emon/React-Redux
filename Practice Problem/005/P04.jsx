import { useReducer } from "react";

const initialState = {
  counter1: 0,
  counter2: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, counter1: state.counter1 + action.value };
    case "decrement1":
      return { ...state, counter1: state.counter1 - action.value };
    case "reset1":
      return { ...state, counter1: initialState.counter1 };
    case "increment2":
      return { ...state, counter2: state.counter2 + action.value };
    case "decrement2":
      return { ...state, counter2: state.counter2 - action.value };
    case "reset2":
      return { ...state, counter2: initialState.counter2 };
    default:
      return state;
  }
};

const Component1 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {/* counter 1 */}
      <div>
        <h1> Counter-1 : {count.counter1}</h1>

        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "increment1",
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
              type: "decrement1",
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
              type: "reset1",
            })
          }
        >
          Reset
        </button>
      </div>

      {/* counter2 */}
      <div>
        <h1> Counter-2 : {count.counter2}</h1>

        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "increment2",
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
              type: "decrement2",
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
              type: "reset2",
            })
          }
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Component1;
