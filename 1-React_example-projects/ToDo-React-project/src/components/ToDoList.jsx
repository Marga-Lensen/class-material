// ToDoList.jsx
import { ToDoItem } from "./ToDoItem.jsx";

function ToDoList({ todos, onToggle, onDelete }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </div>
  );
}

export default ToDoList;