import React from "react";
import Todo from "../components/Todo";
import { useSelector } from "react-redux";

export default function TodoList() {
  // Choose the reducer you want from store
  const todos = useSelector((store) => store.todos);

  return (
    <div className="todos">
      {/* map todos list from the reducer into todo components */}
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
}
