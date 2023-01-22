import { combineReducers } from "redux";
import benefits from "./benefits";

const rootReducer = combineReducers({
  benefits,
});

export type RootStateType = ReturnType<typeof rootReducer>

export default rootReducer;
