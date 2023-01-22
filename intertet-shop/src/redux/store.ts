import { createStore, compose } from "redux";
import rootReducer from "~/redux/reducers/rootReducer";

const store = createStore(
  rootReducer,
  compose((window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f)
);

export default store;
