const INITIAL_STATE = {
  data: "",
  loading: false,
  error: "",
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_CATEGORIES_START":
      return { ...state, loading: true, error: "", data: [] };
    case "GET_CATEGORIES_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: "" };
    case "GET_CATEGORIES_ERROR":
      return {
        ...state,
        loading: false,
        error: "There is a mistake, please refreshing",
        data: [],
      };
  }

  return state;
};
