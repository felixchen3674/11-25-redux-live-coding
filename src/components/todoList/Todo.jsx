import { useDispatch } from "react-redux";
import { checkedTodo, deleteTodo } from '../../redux/reducer/todosReducer'

// export default function Todo({ todo }) {
//   console.log("todo", todo);
//   const dispatch = useDispatch();
//   const handleDeleteTodo = (id) => {
//     dispatch(deleteTodo(id));
//   }
//   const handleCheckedTodo = (id) => {
//     dispatch(checkedTodo(id));
//   }
//   return (
//     <div>
//       <input type="checkbox" checked={todo.completed} onChange={() => handleCheckedTodo(todo.id)} />
//       <span>{todo.task}</span>
//       <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
//     </div>
//   );
// }
export default function Todo({ todo }) {
  console.log("todo", todo);
  const dispatch = useDispatch();
  const handleDeleteTodo = () => {
    //console.log(id);
    dispatch(deleteTodo(todo.id));
  }
  const handleCheckedTodo = () => {
    dispatch(checkedTodo(todo.id));
  }
  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={handleCheckedTodo} />
      <span>{todo.task}</span>
      <button onClick={handleDeleteTodo}>Delete</button>
    </div>
  );
}