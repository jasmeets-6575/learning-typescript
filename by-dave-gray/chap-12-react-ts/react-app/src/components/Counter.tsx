import React, { ReactNode } from "react";

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
  count: number;
};

const Counter = ({ count, children, setCount }: CounterProps) => {
  return (
    <>
      <h1>{children}</h1>
      <button onClick={() => setCount(count + 1)}>add </button>
      <button onClick={() => setCount(count - 1)}>subtract </button>
    </>
  );
};
export default Counter;
