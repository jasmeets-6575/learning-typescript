import React from "react";
import TodoList   from "./components/ToDoList";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the course" }];
  return <div>
    <TodoList />
  </div>
};

export default App;
