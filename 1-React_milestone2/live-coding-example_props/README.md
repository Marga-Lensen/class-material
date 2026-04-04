# live-coding-example_props

Live coding examples for introducing **React props**.

This repo focuses on:
- passing data from a **parent component** to a **child component**
- reading props via the **props object**
- reading props via **object destructuring**
- handling missing props with **default values**
- using **conditional rendering** when props may be missing

---

## What are props?

In React, **props** (short for *properties*) are values passed from a parent component to a child component. Props help make components reusable and customizable. React describes props as the way components communicate with each other, and a component function receives props as its argument. [React: Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)

> Takeaway: props are **read-only input values** for a component.

---

## Props via the `props` object

A component can receive all passed values inside one object called `props`.

### Parent component

```jsx
import Greeting from "./Greeting";

function App() {
  return <Greeting name="Alice" age={25} city="Berlin" />;
}

export default App;
```

### Child component

```jsx
function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Age: {props.age}</p>
      <p>From: {props.city}</p>
    </div>
  );
}

export default Greeting;
```


## Props via destructuring

Because `props` is a JavaScript object, we can use **object destructuring** to unpack values directly in the function parameter list. [MDN: Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)

```jsx
function Greeting({ name, age, city }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      <p>From: {city}</p>
    </div>
  );
}

export default Greeting;
```

This version is shorter and often easier to read once you understand the `props` object.

---

## Missing props

If a prop is not passed, its value is `undefined`.

### Example

```jsx
// App.jsx
<Greeting name="Alice" />
```

```jsx
// Greeting.jsx
function Greeting(props) {
  console.log(props);

  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Age: {props.age}</p>
      <p>From: {props.city}</p>
    </div>
  );
}
```

`props.age` and `props.city` are `undefined` here because they were not passed from the parent.

In JSX, `undefined` is rendered as nothing, so you may see empty space instead of visible text values.

---

## Conditional rendering for missing props

A common React pattern is to render content only if a value exists. React calls this **conditional rendering**. [React: Conditional Rendering](https://react.dev/learn/conditional-rendering)

```jsx
function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      {props.age && <p>Age: {props.age}</p>}
      {props.city && <p>From: {props.city}</p>}
    </div>
  );
}

export default Greeting;
```

This prevents empty lines for missing values.

> Note: `&&` works well for values that should only appear when they are truthy.

---

## Default values with destructuring

Another clean solution is to give props **default values** while destructuring. This is standard JavaScript syntax, not React-specific syntax. [MDN: Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)

```jsx
function Greeting({ name, age = 0, city = "Unknown" }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      <p>From: {city}</p>
    </div>
  );
}

export default Greeting;
```

This makes the output more predictable when some props are missing.

> Important: default values are used when the value is `undefined`.

---


## Key concepts and correct terms

- **Props**: values passed from parent to child in React  
- **Parent component**: the component sending the data  
- **Child component**: the component receiving the data  
- **Props object**: the object containing all passed props  
- **Destructuring**: unpacking object properties into variables  
- **Default values**: fallback values used when a prop is missing  
- **Conditional rendering**: rendering JSX only when a condition is true  

---

## Useful links

### React
- [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)

### MDN
- [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

---

## Setup

See `setup.md` for creating a React project with Vite from scratch.