const todokey = "reactTodo";

export const getTodoLocalStorage = () => {
  const rawTodo = localStorage.getItem(todokey);
  if (!rawTodo) return [];

  try {
    return JSON.parse(rawTodo);
  } catch (e) {
    console.error("Invalid JSON in localStorage:", e);
    return []; // fallback to empty array
  }
};

export const setTodoLocalStorage = (task) => {
  localStorage.setItem(todokey, JSON.stringify(task));
};
