import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/actions";

export default function Todo({ todo }) {
  const dispatch = useDispatch();

  const checkTodo = () => {
    document.querySelector(`#todo-${todo.id}`).classList.toggle("check");
  };

  return (
    <div className="todo">
      <p
        id={`todo-${todo.id}`}
        style={{ display: "inline-block" }}
        onClick={checkTodo}
      >
        {todo.text}
      </p>
      <span onClick={() => dispatch(deleteTodo(todo.id))}>
        <i className="fas fa-trash-alt"></i>
      </span>
    </div>
  );
}
