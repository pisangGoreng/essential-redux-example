import React, { useState } from "react";
import {
  increment,
  selectCount,
  decrement,
  incrementByAmount,
  incrementAsync,
  selectFetchStatus,
} from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";
import Children from "./Children";

export function Counter() {
  const counter = useSelector(selectCount);
  const fetchStatus = useSelector(selectFetchStatus);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount);

  console.log("Counter re render");

  return (
    <div>
      <p>counter {fetchStatus === "idle" ? counter : fetchStatus} </p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <input
        aria-label="set increment amount"
        value={incrementValue}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(incrementByAmount(incrementValue));
        }}
      >
        Add Amount
      </button>

      <button
        onClick={() => {
          dispatch(incrementAsync());
        }}
      >
        Add Async
      </button>
    </div>
  );
}
