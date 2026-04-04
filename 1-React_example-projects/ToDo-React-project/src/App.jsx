import { useEffect, useState } from "react";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      return [];
    }
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo() {
    const trimmedText = inputValue.trim();

    if (!trimmedText) return;

    const newTodo = {
      id: Date.now(),
      text: trimmedText,
      done: false,
    };

    setTodos((previousTodos) => [...previousTodos, newTodo]);
    setInputValue("");
  }

  function handleToggleTodo(id) {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function handleDeleteTodo(id) {
    setTodos((previousTodos) =>
      previousTodos.filter((todo) => todo.id !== id)
    );
  }

  return (
    <div className="app">
      <h1>To-Do List</h1>

      <div className="input-row">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleAddTodo();
            }
          }}
        />
        <button onClick={handleAddTodo}>Add Task</button>
      </div>

      <ToDoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
}

export default App;