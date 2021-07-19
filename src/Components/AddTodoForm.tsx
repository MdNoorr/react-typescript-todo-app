import React, { useState, ChangeEvent, FormEvent } from "react";
import { AddTodo, Todo } from "./types";

// interface AddTodoFormProps {
//   addTodo: (newTodo: String) => void;
// }

interface AddTodoFormProps {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
    //   e.preventDefault();
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <form className="form">
      <input
        placeholder="What do you want to add?"
        type="text"
        value={newTodo}
        onChange={handleChange}
      />
      <br />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
