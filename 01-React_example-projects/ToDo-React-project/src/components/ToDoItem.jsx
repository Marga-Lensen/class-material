// ToDoItem.jsx
export function ToDoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <span
        style={{
          textDecoration: todo.done ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>

      <div className="buttons">
        <button onClick={onToggle}>✔</button>
        <button onClick={onDelete}>✖</button>
      </div>
    </div>
  );
}