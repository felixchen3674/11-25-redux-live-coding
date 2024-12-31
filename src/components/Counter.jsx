import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/reducer/countReducer";

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Add</button>
    </div>
  );
}
