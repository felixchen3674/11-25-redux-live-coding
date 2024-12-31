import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducer/todosReducer";

export default function TodoList() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      addTodo({
        id: Date.now(),
        task,
        completed: false,
      })
    );
  }
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
