const initialState = {
  list: [],
};

export const booksReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: action.payload.id,
            data: action.payload.data,
          },
        ],
      };
    case "UPDATE_BOOK":
      const changeList = state.list.map((item) => {
        if (item.id === action.payload.id.itemId) {
          item.data = action.payload.data;
        }
        return item;
      });
      return {
        ...state,
        list: changeList,
      };
    case "DELETE_BOOK":
      const newList = state.list.filter((item) => item.id !== action.payload);
      return {
        ...state,
        list: newList,
      };

    default:
      return state;
  }
};
