import MainStackNavigations from "./src/navigations/MainStackNavigations";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./src/store";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <MainStackNavigations />
    </Provider>
  );
}
