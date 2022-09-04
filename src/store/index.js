import { combineReducers } from "redux";
import { categoryReducer } from "./reducers/categoryReducer";
import { booksReducers } from "./reducers/booksReducers";

const rootReducer = combineReducers({
  categories: categoryReducer,
  books: booksReducers,
});

export default rootReducer;
