import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>add </button>
      <button onClick={() => setCount(count - 1)}>subtract </button>
    </>
  );
};
export default Counter;
