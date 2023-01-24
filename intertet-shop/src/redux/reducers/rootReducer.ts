import { combineReducers } from "redux";
import benefits from "./benefits";
import categories from "./categories";
import filters from "./filters";

const rootReducer = combineReducers({
  benefits,
  filters,
  categories,
});

export type RootStateType = ReturnType<typeof rootReducer>

export default rootReducer;
