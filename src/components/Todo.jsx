import { useState } from "react";
import TodoDate from "./TodoDate";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { getTodoLocalStorage, setTodoLocalStorage } from "./TodoLocalStorage";
import "./Todo.css";

export const Todo = () => {
  const [task, setTask] = useState(getTodoLocalStorage());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) return;
    const todoContentMatch = task.find(
      (currTask) => currTask.content === content
    );
    if (todoContentMatch) return;
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  // add In LocalStorage
  if (task) {
    setTodoLocalStorage(task);
  }

  /// Delete todo
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((currTask) => currTask.content !== value);
    setTask(updatedTask);
  };

  /// Clear all todo
  const handleClearAllTodo = () => {
    setTask([]);
  };

  // Handle checked todo
  const handleCheckedTodo = (content) => {
    const updattedTask = task.map((currTask) => {
      if (currTask.content === content) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTask(updattedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((currTask, index) => {
            return (
              <TodoList
                key={currTask.id}
                data={currTask.content}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
                checked={currTask.checked}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearAllTodo}>
          Clear All
        </button>
      </section>
    </section>
  );
};
