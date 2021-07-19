import React from "react";
import TodoListItems from "./TodoListItems";
import { Todo, ToggleTodo } from "./types";

interface TodoListItemProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<TodoListItemProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoListItems
            key={todo.text}
            todo={todo}
            toggleTodo={toggleTodo}
          ></TodoListItems>
        );
      })}
    </ul>
  );
};

export default TodoList;
