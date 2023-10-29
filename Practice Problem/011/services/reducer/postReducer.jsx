const initialState = {
  isLoading: false,
  post: [],
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        post: action.payload,
        error: null,
      };
    case "FAILED":
      return {
        ...state,
        isLoading: false,
        post: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
