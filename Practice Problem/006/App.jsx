import React, { useReducer } from "react";
import ComponentA from "../component/componentA";

export const counterContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;

    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count: {count}</h1>
      <counterContext.Provider value={{ dispatch }}>
        <ComponentA />
      </counterContext.Provider>
    </div>
  );
}

export default App;
