import { useSelector ,useDispatch} from "react-redux";
import { removeCheckedTodo} from "../../redux/reducer/todosReducer";


export default function Footer() {
    // get remain todo list not finished
    const todos = useSelector((state) => state.todos);
    const remainTodo = todos.filter((todo) => !todo.completed);
    const dispatch = useDispatch();
    // const remainTodoCount = remainTodo.length;
    // const totalTodoCount = todos.length;
    const handleRemoveCheckedTodo = () => {
        console.log(todos);
        dispatch(removeCheckedTodo(todos))
        
    }
    return ( <div>
        Remaining Todo List {remainTodo.length} out of {todos.length}
        <button onClick={handleRemoveCheckedTodo}> remove checked</button>

    </div>) 
   
}