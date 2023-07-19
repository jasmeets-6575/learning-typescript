import { useState, useEffect } from "react";

interface User {
  id: number;
  userName: string;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User[] | null>(null);

  useEffect(() => {
    console.log("mounting");
    console.log("User:", user);
    return () => console.log("unmounting");
  }, [user]);

  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default App;
