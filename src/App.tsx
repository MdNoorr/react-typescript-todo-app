import React from "react";
import { useState } from "react";
import "./App.css";
import AddTodoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";
import TodoListItems from "./Components/TodoListItems";
import { Todo, ToggleTodo, AddTodo } from "./Components/types";

const InitialTodo: Array<Todo> = [
  { text: "Hello world", complete: true },
  { text: "This is World", complete: false },
];

const App: React.FC = () => {
  // const [todos, setTodos] = useState(InitialTodo);
  const [todos, setTodos] = useState<Array<Todo>>(InitialTodo);

  const toggleTodo = (seletedTodo: Todo) => {
    // const toggleTodo :ToggleTodo = seletedTodo => {
    const newTodo = todos.map((todo) => {
      if (todo === seletedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodo);
  };

  // const toggleComplete: ToggleComplete = selectedTodo => {
  //   const updatedTodos = todos.map(todo => {
  //     if (todo === selectedTodo) {
  //       return { ...todo, complete: !todo.complete };
  //     }
  //     return todo;
  //   });
  //   setTodos(updatedTodos);
  // };

  // const addTodo = (newTodo: string) => {
  //   newTodo.trim() !== "" &&
  //   setTodos([...todos, { text: newTodo, complete: false }]);
  // };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  // const addTodo : AddTodo = newTodo => {
  //   setTodos([...todos, { text: newTodo, complete: false }]);
  // };
  return (
    <div className="App">
      <h1>Todo Application</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo}></TodoList>
      <AddTodoForm addTodo={addTodo}></AddTodoForm>
      
      {/* <TodoListItems
        todo={InitialTodo[0]}
        toggleTodo={toggleTodo}
      ></TodoListItems>
      <TodoListItems
        todo={InitialTodo[1]}
        toggleTodo={toggleTodo}
      ></TodoListItems> */}
    </div>
  );
};

export default App;
