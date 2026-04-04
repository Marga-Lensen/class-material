# JavaScript Basics Recap - Continued (day 2 of 2) - March 23, 2026

## 5. Promises - Coffee Shop

```js
const coffeePromise = new Promise((resolve, reject) => {
  const coffeeReady = true
  setTimeout(() => {
    if (coffeeReady) {
      resolve("☕ Your coffee is ready!")
    } else {
      reject("😢 Coffee machine broken!")
    }
  }, 2000)
})

coffeePromise
  .then(message => console.log(message))
  .catch(error => console.error(error))
  .finally(() => console.log("Visit again! 😊"))
```

## 6. Student Data Chain

```js
function fetchStudentData(studentName) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`${studentName} logged in at ${new Date().toLocaleTimeString()}`)
    }, 1000)
  })
}

fetchStudentData("Taylor")
  .then(data => {
    console.log(data)
    return fetchStudentData("Jordan")
  })
  .then(data => {
    console.log(data)
    return fetchStudentData("Sam")
  })
  .catch(err => console.error("Login failed:", err))
```

## 7. DOM Manipulation

```js
const redP = document.createElement("p")
redP.textContent = "Hey I'm red!"
redP.style.color = "red"
document.body.append(redP)

const blueH3 = document.createElement("h3")
blueH3.textContent = "I'm a blue h3!"
blueH3.style.color = "blue"
document.body.append(blueH3)

const pinkDiv = document.createElement("div")
pinkDiv.style.backgroundColor = "pink"
pinkDiv.style.border = "1px black solid"

const h1InDiv = document.createElement("h1")
h1InDiv.textContent = "I'm in a div"
pinkDiv.append(h1InDiv)

const pInDiv = document.createElement("p")
pInDiv.textContent = "ME TOO!"
pinkDiv.append(pInDiv)

document.body.append(pinkDiv)
```

## 8. Counter DOM + localStorage

```js
const counterDiv = document.createElement('div')
counterDiv.innerHTML = `
  <h2>Counter: <span id="count">0</span></h2>
  <button id="increment">+1</button>
  <button id="decrement">-1</button>
  <button id="reset">Reset</button>
`
document.body.append(counterDiv)

let count = parseInt(localStorage.getItem('counter')) || 0
const countEl = document.getElementById('count')

document.getElementById('increment').onclick = () => {
  count++
  countEl.textContent = count
  localStorage.setItem('counter', count)
}

document.getElementById('decrement').onclick = () => {
  count--
  countEl.textContent = count
  localStorage.setItem('counter', count)
}

document.getElementById('reset').onclick = () => {
  count = 0
  countEl.textContent = count
  localStorage.removeItem('counter')
}

countEl.textContent = count
```

## 9. Modern Fetch API

```js
async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const users = await response.json()
    console.log(`${users.length} users loaded!`)
    console.log(users[0])
    return users
  } catch (error) {
    console.error('Fetch failed:', error)
  }
}

fetchUsers()

async function createTodo(title) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, completed: false })
    })
    const newTodo = await response.json()
    console.log('New todo:', newTodo)
  } catch (error) {
    console.error('Create failed:', error)
  }
}

createTodo("Learn fetch API!")
```

## Simple HTML Layout (Pre-DOM)

```html
<!DOCTYPE html>
<html>
<head>
  <title>JS Demo</title>
  <style>body { font-family: Arial; padding: 20px; }</style>
</head>
<body>
  <h1>Task Manager</h1>
  <div id="counter">
    <h2>Counter: <span id="count">0</span></h2>
    <button id="inc">+1</button>
    <button id="dec">-1</button>
  </div>
  <ul id="user-list"></ul>
  <script src="app.js"></script>
</body>
</html>
```

