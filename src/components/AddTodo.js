import React, { useState } from "react";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions";

export default function AddTodo() {
  const [todoText, setTodoText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleSave = (e) => {
    e.preventDefault();
    if (todoText === "") {
      setErrorMessage("Todo cannot be empty!");
      return;
    }
    setErrorMessage("");
    const newTodo = {
      text: todoText,
      id: v4(),
    };
    dispatch(addTodo(newTodo));
    setTodoText("");
  };

  return (
    <div className="addTodo">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleSave}>+</button>
      <br />
      {errorMessage ? <p class="error">{errorMessage}</p> : ""}
    </div>
  );
}
