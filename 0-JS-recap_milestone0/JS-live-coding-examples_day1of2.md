# recap of JS basics - March 19, 2026  (day 1 of 2)

## 0. Logging + Type Coercion

```js
console.log("5" - 1)  // 4
console.log("5" + 1)  // 51
```

## 1. Data Types + String Immutability

```js
const username = "Alex"
const age = 25
console.log(username)  // Alex
console.log(age)       // 25

console.log(username[0])  // A
const firstLetterUpper = username[0].toUpperCase()
console.log(firstLetterUpper)  // A
console.log(username)          // Alex (unchanged!)
```

## 2. Objects

```js
const user = { name: "Alex", age: 25 }
console.log(user)
console.log(user.age)  // 25
user.name = "Jordan"
console.log(user.name)  // Jordan
console.log(user)
```

## 3. Functions + Template Literals

```js
function greet(name) {
  return `Hello, ${name}! 👋`
}
console.log(greet("Alex"))
console.log(greet(user.name))
```

## 4. Arrays - Exact Console Session

### Setup

```js
const students = ["Ana", "Jordan", "Sam", "Riley", "Alex", "Casey"]
console.log(students)
console.log(students [developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array))  // Jordan
```

### Index Mutation

```js
students[0] = "Taylor"
console.log(students[0])  // Taylor
console.log(students)
// Array(6) [ "Taylor", "Jordan", "Sam", "Riley", "Alex", "Casey" ]
```

### Spread + Destructuring

```js
const moreStudents = [...students, "Morgan"]
const [first, second, ...others] = students
console.log(moreStudents)
// Array(7) [ "Taylor", "Jordan", "Sam", "Riley", "Alex", "Casey", "Morgan" ]
console.log(students)  // Array(6)
console.log(first)     // Taylor
console.log(second)    // Jordan
console.log(others)    // Array(4) [ "Sam", "Riley", "Alex", "Casey" ]
const evenMoreStudents = [...moreStudents, "Drew"]
console.log(evenMoreStudents)
// Array(8) [ "Taylor", "Jordan", "Sam", "Riley", "Alex", "Casey", "Morgan", "Drew" ]
console.log(evenMoreStudents.length)  // 8
```

### Mutable Methods

```js
students.push("Morgan")
console.log(students)  // Array(7)
students.pop()   // Morgan
console.log(students.length)  // 6
students.unshift("Drew")
console.log(students[0])  // Drew
students.shift()
console.log(students.length)  // 6
```

### Array Methods

```js
const sortedStudents = [...students].sort()
console.log(sortedStudents)
// Array(6) [ "Alex", "Casey", "Jordan", "Riley", "Sam", "Taylor" ]
console.log(students)  // Original unchanged (🧷 safe)

const directSort = students.sort()
console.log(students)  // Now mutated (❗️watch out!)
```

## Control Flow

### If/Else

```js
const age = 17

if (age >= 18) {
  console.log("Can drive!")
} else if (age >= 16) {
  console.log("Can get learner's permit")
} else {
  console.log("Too young")
}

// Ternary
const status = age >= 18 ? "Adult" : "Minor"
console.log(status)
```

### For/While Loops

```js
// For loop
for (let i = 0; i < students.length; i++) {
  console.log(`Student ${i + 1}: ${students[i]}`)
}

// For...of
for (const student of students) {
  console.log(student)
}

// While
let index = 0
while (index < 3) {
  console.log(students[index])
  index++
}
```

## Array Methods - Complete Set

```js
console.log("=== ARRAY METHODS ===")

// forEach 
students.forEach((student, index) => {
  console.log(`${index + 1}. ${student}`)
})

// map
const upperNames = students.map(name => name.toUpperCase())
console.log(upperNames)

// filter
const longNames = students.filter(name => name.length > 6)
console.log(longNames)

// sort
const sorted = [...students].sort()
console.log(sorted)

// reduce
const totalLength = students.reduce((sum, name) => sum + name.length, 0)
console.log("Total chars:", totalLength)
```

## Task Example

```js
const tasks = [
  { id: 1, title: "Learn JS", completed: false },
  { id: 2, title: "Build app", completed: true },
  { id: 3, title: "Deploy", completed: false }
]

// forEach
tasks.forEach(task => console.log(task.title))

// filter incomplete
const incomplete = tasks.filter(task => !task.completed)

// map titles
const titles = tasks.map(task => task.title)

// reduce completed count
const completedCount = tasks.reduce((count, task) => 
  task.completed ? count + 1 : count, 0
)
console.log(`${completedCount} completed`)
```

