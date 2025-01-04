import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import Todo from "./Todo";
import { addTodo } from "../../redux/reducer/todosReducer";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    // console.log('handler the add', task)
    dispatch(addTodo({ id: Date.now(), task: task, completed: false }));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add New Todo</button>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
