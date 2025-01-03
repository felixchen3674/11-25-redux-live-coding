export default function Todo({ todo }) {
  console.log("todo", todo);
  return (
    <div>
      <span>{todo.task}</span>
    </div>
  );
}
