import { combineReducers } from "redux";
import benefits from "./benefits";
import filters from "./filters";

const rootReducer = combineReducers({
  benefits,
  filters,
});

export type RootStateType = ReturnType<typeof rootReducer>

export default rootReducer;
