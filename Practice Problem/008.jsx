import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        loading: false,
        error: "",
        post: action.result,
      };
    case "failed":
      return {
        loading: false,
        post: {},
        error: "error found  fatching problem! ",
      };
    default:
      return state;
  }
};

const Component1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "success",
          result: data,
        });
      })
      .catch(() => {
        dispatch({
          type: "failed",
        });
      });
  });
  return (
    <div>
      {state.loading ? "Loading..." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};

export default Component1;
