import { Counter, Heading, List, Section } from "./components";
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Heading title="home page" />
      <Section>This is my section</Section>
      <Counter count={count} setCount={setCount}>
        Total count is : {count}
      </Counter>
      <List
        items={["Coffee", "Tacos", "Code"]}
        render={(item: string) => <span>{item}</span>}
      />
    </>
  );
}

export default App;
