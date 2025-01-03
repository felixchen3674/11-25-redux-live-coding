import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/reducer/todosReducer";
export default function Todo({ todo }) {
  console.log("todo", todo);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) =>{
    dispatch(deleteTodo(id))
  }
  return (
    <div>
      <span>{todo.task}</span>
      <button onClick={()=>handleDeleteTodo(todo.id)}>Delete</button>
    </div>
  );
}
