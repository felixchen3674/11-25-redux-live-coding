export default function countReducer(state = 0, action) {
  const { type } = action;
  switch (type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
}

export const increment = () => {
  return { type: "INCREMENT" };
};

export const incrementAsync = () => async (dispatch) => {
  setTimeout(() => {
    dispatch(increment());
  }, 1000);
};
