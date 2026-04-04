## Simple React To-Do List

A beginner-friendly React app for adding, marking complete, and deleting tasks. Tasks persist in the browser with `localStorage`. Perfect for experimenting before learning props and how to work with React hooks (***in milestone 2***).

## Features

Add new tasks by typing in the input field and pressing **Enter** or clicking **Add Task**. Each task appears immediately with **Mark Done** and **Delete** buttons that work instantly.

**Persistence**: Tasks and their "done" status remain saved after page refresh using `localStorage.getItem()` and `localStorage.setItem()`. The `useEffect` runs whenever the `todos` array changes to keep data synced. [react](https://react.dev/reference/react/useEffect)

## React Concepts Used

- `useState()` for input text and todo list management
- `useEffect()` to save todos to localStorage after state changes  
- Controlled input (`value={inputValue}` + `onChange`)
- `onKeyDown` for Enter key to add tasks
- Array methods `map()` and `filter()` for immutable updates
- `JSON.parse()`/`JSON.stringify()` for localStorage

## Missing Features (Add Yourself!)

You can extend this project by adding:
- **Edit button** to change the items (using textContent or innerHTML updates from JS recap Milestone 0)
- Custom styling and animations  
- Task categories or priorities
- Filter by completed/active tasks

## Quick Start

```bash
npm install
npm start
```

**Example localStorage code:**
```js
// Load on startup
const saved = localStorage.getItem("todos");
const todos = saved ? JSON.parse(saved) : [];

// Save after changes  
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

