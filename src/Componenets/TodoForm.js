import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [inputValue, setinputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    setinputValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        placeholder="What is the task today"
        type="text"
        className="todo-input"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
