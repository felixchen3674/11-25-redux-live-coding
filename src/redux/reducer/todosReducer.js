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

    default:
      return state;
  }
}

export const addTodo = (payload) => {
  return { type: "TODO_ADDED", payload };
};
