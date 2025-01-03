import { useSelector } from "react-redux";
import Todo from "./Todo";
export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
