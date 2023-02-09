import React, { useReducer } from "react";
import ErrorBoundary from "./ErrorBoundary";

const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      if (state.count + action.payload >= 3) {
        throw new Error("Count cannot be greater than 3");
      }
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

const TestComponent = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      <ErrorBoundary>
        <h1>The count is {state.count}</h1>
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </ErrorBoundary >
    </div>
  );
};

export default TestComponent;
