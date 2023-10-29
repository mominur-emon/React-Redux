import axios from "axios";

export const getAllPost = () => async (dispatch) => {
  dispatch({ type: "REQUEST" });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({ type: "SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "FAILED", payload: error.message });
  }
};
