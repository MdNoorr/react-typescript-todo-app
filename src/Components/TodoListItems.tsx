import React from "react";
import { Todo, ToggleTodo } from "./types";
import "./TodoListItems.css";

// interface TodoListItemsProps {
//   todo: {
//     text: string;
//     complete: boolean;
//   };
// }

// interface TodoListItemsProps {
//   todo: Todo;
//   toggleTodo: (seletedTodo: Todo) => void;
// }

interface TodoListItemsProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoListItems: React.FC<TodoListItemsProps> = ({ todo, toggleTodo }) => {
  return (
    <div className="card">
      {/* <label
        style={{ textDecoration: todo.complete ? "line-through" : "none" }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label> */}
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          onChange={() => toggleTodo(todo)}
          checked={todo.complete}
        />
        {todo.text}
      </label>
      {/* <button>Delete</button> */}
    </div>
  );
};

export default TodoListItems;
