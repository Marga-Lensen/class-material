## Project goal

This project demonstrates a small React learning path:

1. **Props** – passing data from a parent component to a child component
2. **State with `useState`** – storing values that can change over time
3. **Effects with `useEffect`** – running logic after rendering
4. **Fetching API data** – loading products from an external source
5. **Conditional rendering** – showing different UI for loading and loaded states
6. **Rendering lists with `map()`** – displaying multiple items from an array

The repo is meant as a demo project that combines these concepts in a simple and practical way.

---

## Structure and content of the project `demoPropsState`

<details>
<summary>Folder structure (tree)</summary>

```txt
.
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── public
│   ├── favicon.svg
│   └── icons.svg
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components
│   │   ├── Logger.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   └── ProductListLoading.jsx
│   ├── data
│   │   └── products.js
│   ├── index.css
│   └── main.jsx
└── vite.config.js

6 directories, 20 files
```

</details>

---

## Notes about the files

### `App.jsx`
`App.jsx` organizes the page by importing and rendering the demo components.

It acts as the parent component that brings together the examples for props, state, effects, and API fetching.

### React hooks in the child components

- `Logger` uses **`useEffect`**
- `ProductList` uses **`useState` + `useEffect`**
- `ProductCard` includes a small local **`useState`** example for the favorite button
- `ProductListLoading` uses **`useState` + `useEffect`** and also demonstrates a loading state

---

## Core React concepts shown in this repo

### Props
Props are values passed from a parent component to a child component. They help make components reusable.

### `useState`
`useState` is used for data that can change inside a component, for example:
- a favorite button that toggles between two states
- a list of products stored after fetching data
- a loading flag that changes from `true` to `false`

### `useEffect`
`useEffect` is used to run side effects after rendering. In this project, it is used for:
- logging when a component renders
- fetching data from an API
- updating component state after the fetch is finished

### Conditional rendering
Conditional rendering means showing different JSX depending on a condition.

In this project, it is used to:
- show a loading message first
- replace that loading message with the fetched products later

### Rendering lists with `map()`
React commonly uses `map()` to transform an array of data into JSX elements.

Example idea:
- array of products
- one `ProductCard` per product
- render the cards by mapping over the array

---

## `ProductListLoading`

`ProductListLoading` includes an extra `loading` state.

A small timer was added on purpose so that the loading message stays visible a bit longer (3.5 seconds) during the demo. This makes it easier to understand conditional rendering and to clearly see when the fetched products replace the loading text.

This is useful as a demonstration because real API calls are sometimes too fast to visually notice the loading phase.

---

## API note

⚠️ `FakeStoreAPI` was unreliable during class, so this project uses `DummyJSON` instead.

❌ `https://fakestoreapi.com/products`  
✅ `https://dummyjson.com/products`

Always inspect the API response first to understand the data structure.

For example, `DummyJSON` returns an object with a `products` array inside it, so we use:

```js
setProducts(data.products)
```

not:

```js
setProducts(data)
```

This is important because `map()` only works on arrays. If you try to call `products.map(...)` on an object, you will get the error:

```txt
TypeError: products.map is not a function
```

---

## Useful links

### React
- [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
- [State: A Component’s Memory](https://react.dev/learn/state-a-components-memory)
- [`useState`](https://react.dev/reference/react/useState)
- [`useEffect`](https://react.dev/reference/react/useEffect)
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [Rendering Lists](https://react.dev/learn/rendering-lists)

### MDN
- [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### DummyJSON
- [DummyJSON Docs](https://dummyjson.com/docs)
- [DummyJSON Products Endpoint](https://dummyjson.com/docs/products)