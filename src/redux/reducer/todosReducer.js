const initialState = [
  {
    id: 1,
    task: "task 1",
    completed: false,
  },
  {
    id: 2,
    task: "task 2",
    completed: false,
  },
  {
    id: 3,
    task: "task 3",
    completed: true,
  },
  {
    id: 4,
    task: "task 4",
    completed: false,
  },
];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "TODO_ADDED":
      return [...state, action.payload];

    case "TODO_DELETE":
      return state.filter((todo) => todo.id !== action.payload);

    case "TODO_CHECKED":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "TODO_CHECKED_REMOVE" : 
        
        // console.log("@" ,  state.filter((todo) => !todo.completed))
        return  state.filter((todo) => !todo.completed);
   

      
        
    default:
      return state;
  }
}

export const addTodo = (payload) => {
  return { type: "TODO_ADDED", payload };
};
export const deleteTodo = (id) => {
  return { type: "TODO_DELETE", payload: id };
};
export const checkedTodo = (id) => {
  return { type: "TODO_CHECKED", payload: id };
};
export const removeCheckedTodo = (payload) => {
  return {type: "TODO_CHECKED_REMOVE", payload}
}