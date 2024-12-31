const initialState = [
  {
    id: 1,
    task: "this is the first todo",
    completed: false,
  },
];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "TODO_ADDED":
      return [...state, action.payload];

    default:
      return state;
  }
}

export const addTodo = (payload) => {
  return { type: "TODO_ADDED", payload };
};
