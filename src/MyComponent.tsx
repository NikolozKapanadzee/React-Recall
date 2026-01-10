import { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="wrapper">
        <p>{count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={reset}>reset</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </>
  );
}
export default MyComponent;
