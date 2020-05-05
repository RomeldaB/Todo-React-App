import * as actions from "../actions";

export default (
  state = [
    { text: "Do a very important task", id: 1 },
    { text: "Another important task", id: 2 },
    { text: "Another but less important task", id: 3 },
    { text: "Not so important task", id: 4 },
    { text: "Another not important task", id: 5 },
    { text: "Last task", id: 6 },
  ],
  action
) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [...state, action.data];
    case actions.DEL_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

// Combine reducers in index.js
