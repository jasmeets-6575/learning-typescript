import React, { useEffect, useRef, useState } from "react";
import "./ToDoList"

interface TodoListProps {
  items: { id: string; text: string }[];
  onDelete: (id: string) => void;
}
const TodoList: React.FC<TodoListProps> = ({ items, onDelete }) => {

  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={onDelete.bind(null, todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
