import React, { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState({});

  const handleInputValue = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            className="todo-input"
            autoComplete="off"
            type="text"
            value={inputValue.content}
            onChange={(e) => handleInputValue(e.target.value)}
          />
        </div>
        <div>
          <button className="todo-btn" type="submit">
            Add Tasks
          </button>
        </div>
      </form>
    </section>
  );
}

export default TodoForm;
