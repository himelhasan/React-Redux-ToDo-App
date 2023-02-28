import { combineReducers } from "redux";
import filterReducer from "./filters/filterReucer";
import todoReducer from "./todos/todoReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  filterReducer: filterReducer,
});

export default rootReducer;
