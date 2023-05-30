import React, { useState } from "react";
import TodoList from "./components/ToDoList";
import NewTodo from "./components/NewTodo";

type SettingTodos = {
  id:string ; text:string
}
const App: React.FC = () => {
  const [todos ,setTodos] = useState<SettingTodos[]>([]);
  const todoAddHandler = (text: string) => {
    setTodos([{id:Math.random().toString(),text:text}]);
    
  }
  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
