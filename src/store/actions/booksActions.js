import uuid from "react-native-uuid";

export const addBook = (data) => {
  return {
    type: "ADD_BOOK",
    payload: { data: data, id: uuid.v4() },
  };
};

export const deleteBook = (id) => {
  return {
    type: "DELETE_BOOK",
    payload: id,
  };
};

export const updateBook = (data, id) => {
  return {
    type: "UPDATE_BOOK",
    payload: { data: data, id: id },
  };
};
