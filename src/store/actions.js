export const ADD_TODO = "addTodo";
export const DEL_TODO = "deleteTodo";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    data,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DEL_TODO,
    id,
  };
};
