import React, { useState } from "react";

function EditTodoForm({ editTodo, task }) {
  const [inputValue, setinputValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(inputValue, task.id);
    setinputValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        placeholder="Update Task"
        type="text"
        className="todo-input"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
}

export default EditTodoForm;
