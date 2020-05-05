import TodosReducer from "./reducers/todos";
import { combineReducers } from "redux";

export default combineReducers({
  todos: TodosReducer,
});

// Connect redux with react in src/index.js
// Create store
