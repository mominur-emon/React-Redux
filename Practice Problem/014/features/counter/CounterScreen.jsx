import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByNumber, reset } from "./counterSlice";

const CounterScreen = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(incrementByNumber(5));
        }}
      >
        Increment_By_Number
      </button>
    </div>
  );
};

export default CounterScreen;
