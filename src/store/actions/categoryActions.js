import api from "../../utils/api";

export const getCategories = () => async (dispacth) => {
  dispacth({ type: "GET_CATEGORIES_START" });
  try {
    await api
      .get("/book-categories_qbktat.json")
      .then((res) =>
        dispacth({ type: "GET_CATEGORIES_SUCCESS", payload: res.data })
      );
  } catch {
    dispacth({ type: "GET_CATEGORIES_ERROR" });
  }
};
