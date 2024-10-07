## JavaScript:

1. JavaScript is executed in web browsers, making it an essential tool for enhancing the user experience. Here are a couple of things JavaScript is known for. Manipulating the DOM: JavaScript can change a web page's content structure and style. It's like having a magic wand for web elements. Handling events: From button clicks to mouse movements, JavaScript can respond to various user interactions, making websites more engaging.

2. JavaScript is a fundamental part of web development and is used in various ways. Enhancing user experience: JavaScript can validate form data, create interactive forms, and provide real time feedback to users. Dynamic web content: It can load new content without refreshing the entire page like real time social media feeds. Animations and visual effects: JavaScript can create animations, sliders, and other visual effects to improve website aesthetics.

## How to use JS:

- In-line JavaScript:

You can include JavaScript code directly in your HTML file using the script tag within the body.

```html
<h1>
  <script>
    // your js code
  </script>
</h1>
```

- External JavaScript file:

It's recommended to put your JavaScript code in a separate JS file and link it to your HTML file using the script tag with a SRC attribute.

Step 1, create a separate JS file, e.g. script.js

```js
function hello() {
  console.log("hello world");
}
```

Step 2, in your HTML file include a script tag with the SRC attribute pointing to your JavaScript file just before the closing body tag for best practice.

```html
<script src="script.js"></script>
```

## Data types and Variables:

Variables act as containers for various types of information or values. You can think of a variable as a named storage location that holds data, and you can use this data in your JavaScript code. variable names must start with a letter, underscore, or dollar sign, and can contain letters, numbers, underscores, and dollar signs.

- Initialization of a variable:

You can optionally assign an initial value to it. To create a variable in JavaScript, you also need to declare it using one of three keywords, var, let, or const.

```js
name = "John";
```

1. Var:

Var was the original way to declare variables in JavaScript, and it has function level scope. This means that a variable declared with var is available throughout the entire function in which it is declared.

```js
function example() {
  if (true) {
    var x = 10;
  }
  console.log(x); // x is available outside of the if block
}
```

2. Let:

Let was introduced in ES6 and provides block level scoping. This means, that a variable declared with let is only available within the block enclosed by curly braces in which it is defined.

```js
function example() {
  if (true) {
    let x = 10;
  }
  console.log(x); // x is not available outside of the if block
}
```

Variables declared with let can be reassigned, but not redeclared within the same block.

```js
{
  let a = 10;
  a = 20; // can be reassigned
}

{
  let a = 10;
  let a = 20; // not redeclared within the same block
}
```

3. Const:

Const is also introduced in ES6 and is used to declare variables with constant values. Once you assign a value to a const variable, you cannot reassign it a different value. It also has block level scoping. Variables declared with const are constant and can neither be reassigned nor redeclared within the same block.

```js
const pi = 3.14;
console.log(pix);
```

- Data types:

JavaScript is a dynamically typed language, which means that you don't need to explicitly specify the data type of a variable when you declare it. The data type is determined dynamically at runtime based on the value you assign to the variable.

1. Primiive data types:

- Strings:

Strings represents text. A string is enclosed in single or double quotes.

```js
let name = "John";
```

- Number:

Number represents both integers and floating-point numbers

```js
let age = 30;
let price = 9.99;
```

- Boolean:

Boolean represents true or false values.

```js
let isStudent = true;
```

- Undefined:

Undefined represents a variable that has been declared, but hasn't been assigned a value.

```js
let x;
```

- Null:

Null represents an empty value or absence of any object value.

```js
let emptyValue = null;
```

2. Composite data types:

Composite data types are those that can hold and manage multiple values as a single unit. These data types are used to organize and manipulate collections of data, making it easier to work with more complex structures. Array and object are two composite data types.

- Array:

An array in JavaScript is a list like data structure for storing multiple value.

```js
const array = [1, 2, 3, 4, 5];
```

- Object:

Object is a collection of key value pairs used for structured data storage.

```js
const person = {
  name: "john",
  age: 30,
};
```

## Operators:

1. Arithmetic operators:

Arithmetic operators are used for basic mathematical calculations. Common arithmetic operators include: addition, subtraction, multiplication, division, and modulus.

```js
let × = 15;
let y = 3;
let sum = x + y; // Addition
console.log(sum); //The answer is 18
let difference = x - y; // Subtraction
console.log(difference); //The answer is 12
let product = × * y; // Multiplication
console.log(product); //The answer is 45
let quotient = × / y; // Division
console.log(quotient); //The answer is 5
let remainder = × % y; // Modulus
console.log(remainder); //The remainder is O
```

2. Comparison operators:

Comparison operators are used to compare two values or variables and return a Boolean true or false result. Common comparison operators include: equality, inequality, strict equality, strict inequality, less than, greater than, less than or equal to, and greater than or equal to.

```js
let a = 5;
let b = 7;
let isEqual = a == b; // Equality
let isNotEqual = a != b; // Inequality
let isStrictEqual = a === b; // Strict equality
let isStrictNotEqual = a !== b; // Strict equality
let isGreaterThan = a > b; // Greater than
let isLessThan = a < b; // Greater than
let isGreaterOrEqual = a >= b; // Greater than
let isLessOrEqual = a <= b; // Greater than
```

3. Logical operators:

Logical operators are used to combine or manipulate Boolean values. Common logical operators include logical AND, logical OR, and logical NOT.

```js
let hasPermission = true;
let isMember = false;
let canAccessResource = hasPermission && isMember; // Logical AND
let canViewPage = hasPermission || isMember; // Logical OR
let isDenied = !hasPermission; // Logical NOT
```

4. Assignment operators:

Assignment operators are used to assign values to variables. The most basic assignment operator is the equal sign.

```js
let x = 10; // Assign the value 10 to the variable x
```

5. Unary operators:

Unary operators operate on a single value or variable. Common unary operators include increment and decrement.

```js
let count = 5;
count++;
count--;
```

## Control flow and Conditional statements:

Control flow and conditional statements are fundamental in directing the flow of a JavaScript program. Control flow refers to the order in which statements are executed in a JavaScript program. While conditional statements, often referred to as decision making statements, are used to manage this flow based on specified conditions. Some of the conditional statements in JavaScript are if statement, else if statement, else statement, nested if else statement, switch statement, and ternary operator.

1. If statement:

The if statement is used to execute a block of code if a specified condition is true, if the condition is false, the code block is skipped.

```js
let age = 25;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

2. Else statement:

The else statement is used to specify a block of code to be executed if the condition in the if statement is false.

```js
let age = 10;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

3. Else if statement:

The else if statement allows you to test multiple conditions sequentially, especially when you have more than two possible outcomes.

```js
let time = 12;

if (time < 12) {
  console.log("Good Morning");
} else if (time < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}
```

4. Nested if else statements:

Nested if else statements are a common programming construct in JavaScript and many other programming languages. They allow you to test multiple conditions and execute different blocks of code based on the results of those conditions.

```js
const temperature = 30;
const isRaining = true;

if (temperature > 30) {
  if (isRaining) {
    console.log("It's hot and raining. Stay inside.");
  } else {
    console.log("It's hot, but not raining. Enjoy the sunshine.");
  }
} else {
  if (isRaining) {
    console.log("It's not so hot, but it's raining. Take an umbrella.");
  } else {
    console.log("It's not hot, and it's not raining. Have a nice day.");
  }
}
```

5. Switch statement:

Switch statement allows you to compare a value against multiple possible case values and execute code based on the first matching case.

```js
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the workweek.");
    break;
  case "Friday":
    console.log("It's almost the weekend!");
    break;
  default:
    console.log("It's a regular day.");
}
```

6. Ternary operator:

Ternary operator is a concise way to write conditional statements such as if else condition.

```js
let age = 20;
let canVote = age >= 18 ? "yes" : "no";
```

## Looping and Iteration:

Looping and iterations in JavaScript are techniques that allow you to execute a block of code repeatedly. They are used to perform repetitive tasks, traverse data structures like arrays and objects, and handle various scenarios in your code. They allow you to iterate through arrays, perform actions on each element, and control the flow of your code dynamically.

1. For loop:

It consists of three parts, initialization, condition, and update.

- Initialization:

This part is where you initialize a loop control variable, typically with an initial value.

- Condition:

This is a Boolean expression that is evaluated before each iteration. If the condition is true, the loop continues, otherwise it terminates.

- Update:

This part is responsible for changing the loop control variable in each iteration, often incrementing or decrementing its value

```js
// statement
for (initialization; condition; update) {
  // code to be executed
}
```

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

2. While loop:

It continually evaluates the condition before each iteration.

```js
// statement
while (condition) {
  // code to be executed
}
```

```js
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

3. Do while loop:

Unlike the for or while loops, a do while loop guarantees that the code block will execute at least once, even if the condition is initially false. The structure of a do while loop is as follows. The code block is executed first, then the condition is checked. If the condition is true, the loop continues and the code block is executed again. If the condition is false, the loop terminates.

```js
// statement
do {
  // code to be executed
} while (condition);
```

```js
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

## Functions:

Functions are a fundamental part of the language and are used to encapsulate and organize code into manageable, reusable units. functions help improve code structure, readability, and maintainability. You can declare a function using the function keyword followed by a name, enclosed parentheses, and the functions code enclosed in curly braces. When you call a function, it executes the code within its block.

```js
function sayHello() {
  console.log("hello");
}

sayHello();
```

1. Non-parameterized functions:

Non-parameterized functions do not require any parameters to operate. They can perform their tasks without receiving any specific input values. Non-parameterized functions are often used for tasks that rely solely on their internal logic or external factors.

```js
function add() {
  let a = 10;
  let b = 20;
  return a + b;
}
```

2. Parameterized functions:

Parameterized functions except one or more parameters, also called arguments that provide input data for the function to work with. You define these parameters in the function's declaration, and when you call the function, you pass specific values for those parameters.

Parameterized functions are versatile because they can adapt to different input values, making them more flexible.

```js
function add(a, b) {
  return a + b;
}

add(4, 7);
```

- Parameters and Arguments:

Parameters are variables you define in the function declaration to accept input values. Arguments are the actual values you pass to a function when calling it.

```js
function add(a, b) {
  // a and b are Parameters
  return a + b;
}

// 4 and 7 are Arguments
add(4, 7);
```

- Writing a function in JavaScript:

There are two ways of writing a function in JavaScript, function declaration, function expression.

1. Function declaration:

Function declaration is the traditional way to define a function. It is similar to how we define a function in other programming languages. We start by declaring it using the keyword function, then we write the function name and the parameters.

```js
function add(a, b) {
  return a + b;
}
```

2. Function expression;

Here we define a function using a variable and store the returned value in that variable.

```js
const add = function (a, b) {
  console.log(a + b);
};

add(2, 3);
```

- Types of functions:

1. Named function:

Named functions have specific names that can be called by their names. They are typically declared using the function keyword. In the given example, the name of the function is add.

```js
const add = function (a, b) {
  console.log(a + b);
};

add(2, 3);
```

2. Immediately invoked function expression(IIFE):

IIFE is a function in JavaScript that's defined and executed immediately after its creation. It's often employed to encapsulate variables and code within a private scope, helping to prevent global scope contamination and variable conflicts.

```js
(function sayHello() {
  console.log("hello");
})();
```

3. Arrow function:

The arrow function is a more concise way to write functions introduced in ES6. They are often used for short, simple functions.

```js
const add = (a, b) => a + b;
```

Arrow functions have a more compact and readable syntax. They use a fat arrow to define the function, which is why they're commonly
referred to as arrow functions. Arrow functions do not require the function keyword. This makes the code cleaner and easier to write. Arrow functions can also be categorized in two ways, parameterized and non parameterized functions.

4. Anonymous function:

Anonymous functions are without a name. These are often used as arguments for other functions or assigned to variables. For example, you can create anonymous functions using the arrow function

```js
const add = (a, b) => a + b; // => a + b this part is called Anonymous function
```

- Return statement:

In JavaScript functions, the return statement is used to value that a function should produce as its result when it's called. It's essential for controlling the output of functions and is crucial for making functions reusable and versatile.

The return statement is used to produce an output value from a function. This output can be a specific data value, a calculated result, or even another function. It serves as an exit point for a function. Once a return statement is encountered, the function terminates and the control flow is handed back to the code that called the function.

A return statement typically appears inside the function body and specifies the value that the function should return. When the function is called, it executes its code and evaluates the return statement. The function then immediately exits and the specified value is returned to the code that called the function. You can capture the returned value by assigning the function call to a variable or using it directly in other expressions.

```js
function add(a, b) {
  return a + b;
}

const result = add(4, 7); // the value 11 is returned from the function and assigned to result

console.log(result);
```

- Function Closure:

A function closure is a function that retains access to variables from its enclosing function scope. Even after the enclosing function has finished executing, closures allow you to create private variables, implement data hiding, and maintain state between function calls.

Closures allow you to encapsulate data within a function scope. Creating a private environment for variables. This is crucial for building modular and maintainable code. As it helps prevent unintended interference or modification of variables from outside the function. By using closures, you can hide certain data and expose only the necessary parts of your code's functionality. This is fundamental for creating clean and secure application programming interface, or API's libraries and modules.

Closures enable functions to remember and maintain state between function calls. This is valuable for tasks like implementing counters, timers, or managing application state in event driven programming.

In this example, the greet function takes a name parameter, and returns an inner function, sayHello. you can create multiple greetings by calling greet with different names, and each greeting retains its specific name. When you invoke greetJohn and greetAlice, they still remember their respective name values.

```js
function greet(name) {
  const greeting = "Hello. ";

  function sayHello() {
    console.log(greeting + name);
  }

  return sayHello;
}

const greetJohn = greet("John");
const greetAlice = greet("Alice");

greetJohn();
greetAlice();
```

- Function Hoisting:

Function hoisting, is a behavior in Javascript where function declarations are moved to the top of their containing scope during the compilation phase, allowing you to use a function before it's actually declared in the code. This behavior only applies to function declarations, not function expressions.

```js
sayHello(); // this works even though the function is called before its declared

// it works because function declarations are hoisted to the top of their containing scope during the compilation phase.
function sayHello() {
  console.log(greeting + name);
}
```

Function hoisting can make code more readable and self explanatory, by allowing you to use functions before they are defined in the code. This can improve the logical flow of your code, and make it easier to understand.

Hoisted functions can be defined at any point within their containing scope, regardless of the order in which they are called. This flexibility can be helpful when structuring your code and organizing related functions.

Function hoisting is crucial for recursive functions, as it allows the function to call itself within its own definition. You can conditionally execute functions based on certain criteria without having to define them in a specific order.

## Events:

In Javascript, events are crucial for creating interactive and dynamic web applications, these are actions or occurrences in the browser, such as user interactions, page loading, or mouse movements over elements. Some of the common events in Javascript are click, mouseover, keydown, and change.

- Click event:

The click event is triggered when a user clicks an element like a button.

The Javascript code at the end of the document first retrieves references to these elements using document.getElementById and stores them in the button and output variables.

Next, attach an event handler to the button element using the onclick property. The event handler, an anonymous function, specifies
what should happen when clicking the button.

```html
<body>
  <button id="myBtn">Click Me</button>

  <script>
    const button = document.getElementById("myBtn");

    button.onclick = function () {
      console.log("onclick");
    };
  </script>
</body>
```

- Mouseover event:

The mouseover event is triggered when the mouse cursor enters an element.

You can then attach an event handler to the div element using the onmouseover property.

```html
<body>
  <div id="myDiv">Click Me</div>

  <script>
    const div = document.getElementById("myDiv");

    div.onmouseover = function () {
      console.log("onmouseover");
    };
  </script>
</body>
```

- Keydown event:

The keydown event is triggered when you press down a key on the keyboard. This example demonstrates handling the keydown event by
displaying the pressed key when typing in an input field. An event handler for the keydown event is attached to the input field using the onkeydown property. This event handler is defined to accept an event parameter which contains information about the key that was pressed.

This event handler is defined to accept an event parameter which contains information about the key that was pressed.

```html
<body>
  <input type="text" id="myInput" />

  <script>
    const input = document.getElementById("myInput");

    input.onkeydown = function (event) {
      console.log(event.key);
    };
  </script>
</body>
```

- Change event:

The change event is triggered when the value of an input element changes. Typically, you can use it to form elements like text fields or drop-downs.

The event handler for the change event is attached to the input field using the onchange property. When the input value changes, the event handler triggers and updates the paragraphs content with value changed to followed by the new value of the input.

```html
<body>
  <input type="text" id="myInput" />

  <script>
    const input = document.getElementById("myInput");

    input.onchange = function () {
      console.log(input.value);
    };
  </script>
</body>
```

## Array:

In JavaScript, an array is a data structure used to store and organize a collection of values. These values can be of various data types,
such as numbers, strings, objects, or even other arrays.

Arrays in JavaScript are ordered, which means that the elements are stored in a specific sequence, and each element is accessible by its index or position in the array. It's important to note that arrays in JavaScript are zero-indexed, meaning the first element is at index 0, the second element is at index 1, and so on. You can access and manipulate individual elements within an array using their indices.

Creating an array in JavaScript is straightforward. You can use square brackets to declare an array and store elements within it separated by commas.

```js
const fruits = ["apple", "banana", "cherry"];

// Arrays are zero-indexed, so you can access elements using their index
const firstFruit = fruits[0]; // apple
const secondFruit = fruits[1]; // banana
```

Arrays in JavaScript are mutable. This means that you can change, add, or remove elements after creating the array.

```js
const fruits = ["apple", "banana", "cherry"];

// it changes cherry to strawberry.
fruits[2] = "strawberry"; // Modifying an elment
```

Arrays can also contain other arrays, allowing you to create multidimensional arrays or complex data structures.

```js
// 2d array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

- Manipulating and Iterating Arrays:

Arrays are fundamental data structures in JavaScript, and they often require manipulation and iteration to work with data effectively. JavaScript provides a wide range of built-in array methods that allow you to perform various operations on arrays without writing custom code.

1. Push method:

The push method adds one or more elements to an array's ends and returns the array's new link.

```js
const fruits = ["apple", "banana"];

fruits.push("orange");

console.log(fruits); // ["apple", "banana", "orange"]
```

2. Pop method:

The pop method removes the last element from an array and returns that element.

```js
const fruits = ["apple", "banana", "orange"];

// this variable stores the removed last element
const removedItem = fruits.pop();

console.log(removedItem); // orange
console.log(fruits); // ["apple", "banana"]
```

3. Shift method:

The shift method removes the first element from an array and returns that element.

```js
const fruits = ["apple", "banana", "orange"];

// this variable stores the removed first element
const removedItem = fruits.shift();

console.log(removedItem); // apple
console.log(fruits); // ["banana", "orange"]
```

4. Unshift method:

The unshift method adds one or more elements to an array's beginning, and returns the array's new link.

```js
const fruits = ["apple", "banana"];

fruits.unshift("orange", "strawberry");

console.log(fruits); // ["orange", "strawberry", "apple", "banana"]
```

5. Splice method:

The splice changes the contents of an array by removing, replacing or adding elements at a specific position.

Splice (1,1, "grape") replaces the element at index one which is banana with grape.

```js
const fruits = ["apple", "banana", "orange"];

fruits.splice(1, 1, "grape"); // replace the second element with grape

console.log(fruits); // ["apple", "grape", "orange"];
```

6. Concat method:

The concat method combines them into a new array called combinedFruits. The slice method returns a shallow copy of a portion of an array into a new array without modifying the original content.

```js
const fruits = ["apple", "banana"];
const fruits2 = ["orange", "strawberry"];

const combileFruits = fruits.concat(fruits2);

console.log(combileFruits); // ["apple", "banana", "orange", "strawberry"]
```

7. Slice method:

The slice method returns a shallow copy of a portion of an array into a new array without modifying the original content.

Slice (1, 3) creates a new array, slicedFruits containing elements from index 1-2, excluding index 3 of the original fruits array.

```js
const fruits = ["apple", "banana", "cherry", "orange"];

const slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits); // ["banana", "cherry"]
```

8. IndexOf method:

The indexOf method finds the index of a specified element within an array. It returns the index of the first occurrence of the element, or minus one, if it is not able to find the element.

```js
const fruits = ["apple", "banana", "cherry", "orange"];

const index = fruits.indexOf("cherry"); // returns 2

console.log(index);
```

9. Reverse method:

The reverse method reverses the order of elements, effectively reversing the array in place.
In this example, you can use the reverse method to reverse the order of elements in the fruit array.

```js
const fruits = ["apple", "banana", "cherry"];

fruits.reverse();

console.log(fruits); // [ "cherry", "banana", "apple"];
```

10. Sort method:

The sort method is used to sort the elements of an array. By default, it sorts elements as strings and in lexicographic order, to sort numbers correctly, you can provide a comparison function.

```js
const numbers = [4, 2, 8, 6, 1];

numbers.sort();

console.log(numbers); // [1, 2, 4, 6, 8]
```

Sort method is used with a custom comparison function to sort the numbers correctly.

```js
const numbers = [4, 2, 8, 6, 1];

numbers.sort((a, b) => a - b);

console.log(numbers); // [1, 2, 4, 6, 8]
```

11. Length method:

The length property returns the number of elements in the array.

```js
const fruits = ["apple", "banana", "cherry", "orange"];

console.log(fruits); // 4
```

You can use it to determine the size, or to resize an array by changing its length.

```js
const fruits = ["apple", "banana", "cherry"];

fruits.length = 5;

// here javascript add 2 undefined to make the array size 5
console.log(fruits); // ["apple", "banana", "cherry", undefined, undefined]
```

You can truncate an array by setting its length property to a smaller value. Reducing the length effectively removes elements from the end of the array.

```js
const fruits = ["apple", "banana", "cherry"];

fruits.length = 2; // truncating the array

console.log(fruits); // ["apple", "banana"]
```

12. ForEach method:

The forEach method iterates through an array, and applies a provided function to each element.
It's commonly used when you want to perform a specific action for each element, without creating a new array.

```js
const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
  { name: "Charlie", email: "charlie@example.com" },
];

// this arrow function that takes the current user object as a parameter.
users.forEach((user) => {
  console.log(user.email);
});
```

13. Map method:

The map method creates a new array by applying a provided function to each element in the original array. It's perfect for transforming data without modifying the original array.

The map method iterates through the array, and executes the provided arrow function for each element.

```js
const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
  { name: "Charlie", email: "charlie@example.com" },
];

const usersName = users.map((user) => user.name);

console.log(usersName); // [ "Alice", "Bob", "Charlie"]
```

14. Filter method:

The filter method creates a new array containing elements that pass a specified condition.
It's useful for extracting specific data from an array.

```js
const users = [
  { name: "Alice", age: 24 },
  { name: "Bob", age: 26 },
  { name: "Charlie", age: 18 },
];

const filterdUsers = users.filter((user) => user.age > 18);

console.log(filterdUsers); // [ { name: 'Alice', age: 24 }, { name: 'Bob', age: 26 } ]
```

15. Find method:

The find method returns the first element in an array that satisfies a specified condition.It's useful for searching for specific data.

```js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const findUser = users.find((user) => user.id === 2);

console.log(findUser); // { id: 2, name: 'Bob' }
```

- 2 Dimensional Array:

A 2D array, also known as a two-dimensional array, is collection of elements organized in rows and columns. Each element in a 2D array is accessed using two indices, one for the row and another for the column.

To access a specific element in a 2D array, you need to provide both row and column indices.

```
             [0][1][2] -> row
 column ->[0][1, 2, 3],
          [1][4, 5, 6],
          [2][7, 8, 9],

```

```js
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// grid[column][row]
console.log(grid[1][2]); // 6
```

- Iterating 2D Array:

```js
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    console.log(grid[i][j]);
  }
}
```

2D arrays are used in a wide range of applications, including representing game boards and grids, storing and processing images, managing data in spread-sheets and databases, solving mathematical problems such as matrix multiplication, and handling geographic data in maps and GIS systems.

## Classes and Objects:

- Class:

A class is a blueprint or template for creating objects in JavaScript. It defines the structure and behavior by encapsulating data, or properties, and methods, or functions that are common to a group of objects. Classes provide a way to model real-world entities, bringing a level of abstraction to your code.

For example, a person class could define properties like name and age, and methods like say Hello. In Javascript, you can define a class using the class keyword. class name will start with capital letter.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

- Object:

Objects are specific instances of a class created based on the class blueprint. They represent specific entities on unique values for the properties defined in the class. Objects encapsulate state or property values and behavior or methods in a single unit.

```js
class Person {}

// creating an instance of the Person class and called the getFullName method.
const person1 = new Person("John", "Doe");
console.log(person1.getFullName());
```

- Creating objects using Object literals:

Object literals are a way to create ad hoc objects without defining a class.

In this example, we've created a person object with properties and a method.

```js
const person = {
  firstName: "Alice",
  lastName: "Johnson",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.getFullName());
```

- Creating objects using Function constructors:

Function constructors are regular JavaScript functions used to create and initialize objects.
It's a convention to name functional constructors with an initial capital letter. In this case, we have created a car constructor to create instances of car objects with properties for the make and model.

```js
function Car(make, model) {
  this.make = make;
  this.model = model;
}

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

console.log(car1);
```

- Defference between object literals and function constructors:

Object literals are suitable for creating ad hoc objects, like storing individual customer
orders with unique details.
While function constructors are useful when you want to create multiple instances of objects with shared properties and methods.

Object literals are suitable for scenarios where you need unique details for specific instances.
while function constructors provide a more structured and organized way to create objects.

- Accessing Object Properties:

1. Dot notation:

Dot notation is the most common way to access object properties. You use a dot followed by the property name.

```js
const person = {
  firstName: "John",
  lastName: "Deo",
  age: 30,
};

console.log(person.firstName); // John
console.log(person.age); // 30
```

2.  Bracket notation:

Bracket notation is an alternative way to access object properties, especially useful when property names contain special characters or spaces.

```js
const person = {
  firstName: "John",
  lastName: "Deo",
  age: 30,
};

console.log(person["firstName"]); // John
console.log(person["age"]); // 30
```

- Array of objects:

An array of objects is a common and powerful way to store and manage structured data in JavaScript. They allow you to organize and manipulate data in a structured manner by combining
the features of both arrays and objects.

1. Creating an array of objects

```js
const students = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 28 },
];
```

2. Accessing elements:

You can access elements within an array of objects using the array index, and then you can access object properties using dot notation.

```js
console.log(students[0].name); // Alice
console.log(student[2].age); // 28
```

3. Modifying elements:

You can modify objects in the array by assigning new values to their properties.

```js
students[1].name = "Robert";
students[2].age = 29;
```

## String and String Manipulation:

Strings are a fundamental data type in JavaScript used to represent text. They can contain letters, numbers, symbols, and white space characters. Strings are enclosed in single or double quotes.

```
const singleQuotes = 'single quotes';
const doubleQuotes = "single quotes";
```

You can also use backticks template literals to create strings, allowing for string interpolation.

```js
const fullName = `${firstName} ${lastName}`;
```

You can concatenate strings using the + operator. The concatenation operator, +, in JavaScript is used to combine or join two or more strings together to create a single longer string.

```js
const firstName = "Peter";
const greeting = "Hello, " + firstName + "!";

console.log(greeting); // Hello, Peter!
```

- String length:

To determine the length of a string, you can use the length property.

```js
const msg = "This is a message.";

console.log(msg.length); // 18
```

- Accessing characters:

You can access individual characters within a string using bracket notation and a zero-based index. In JavaScript, string indices are zero-based, meaning that the first character is at index zero and the second character is at index one, and so on.

```js
const text = "JavaScript";
console.log(text[0]); // J
```

- Changing case:

JavaScript provides methods to change the case of a string. toLowerCase method is a built in string method in JavaScript that converts all characters in a string to lowercase. and The toUpperCase method is another built in string method that converts all characters in a string to uppercase.

```js
const text = "Hello World";

console.log(text.toLowerCase()); // hello world
console.log(text.toUpperCase()); // HELLO WORLD
```

- String searching:

You can search for substrings within a string using methods like indexOf, and includes.

The includes method checks if the string is present within the sentence or not, if present then its return ture else return false.

The indexOf method returns the index or position of the first occurrence.

```js
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.includes("fox")); // true
console.log(sentence.indexOf("fox")); // 16
```

The substring method extracts a portion of the text string starting from index 0 and ending before index 5

The slice method extracts a portion of the text string starting from index 6 until the end.

The substr method extracts a substring starting from index 6 and spanning 5 characters.

```js
const text = "Hello World";

console.log(text.substring(0, 5)); // Hello
console.log(text.slice(6)); // World
console.log(text.substr(6, 5)); // World
```

- Replacing substrings:

The replace method allows you to replace substrings with new values, allowing you to modify the string's content.

```js
const text = "Hello World";
console.log(text.replace("World", "Universe")); // Hello Universe
```

- Splitting strings:

You can split a string into an array of substrings using the split method. creating an array where each element represents the data for one person.

```js
const csvData =
  "Alice, 25, New York; Bob, 30, Los Angeles; Charlie, 28, Chicago";

console.log(csvData.split(";")); // [ 'Alice, 25, New York', ...]
```

- String trimming:

The trim method removes leading and trailing white space from a string. t is especially useful for cleaning and formatting user input or working with data from external sources. The trim method is applied to text which removes leading and trailing white spaces such as spaces, tabs, and so on.

```js
const text = "     Trime me!   ";

console.log(text.trim()); // Trime me!
```

- Template literals:

Template literals provide a powerful and readable way to format strings. Template literals are enclosed by backticks and allow you to embed expressions within the string using dollar sign syntax.

```js
const firstName = "John";
const lastName = "Deo";

console.log(`${firstName} ${lastName}`); // John Deo
```

## Date Objects:

The date object in Javascript is a crucial tool for working with date and time values. It offers methods for creating, formatting, and manipulating dates and times.

```js
const currentDate = new Date();
const specifficDate = new Date(2024, 0, 1); // January 1, 2024
```

Date objects provide access to individual components of a date, such as year, month, day, hour, and more.

```js
const date = new Date();
const year = date.getFullYear(); // Current year
const month = date.getMonth(); // Current month (0-11)
const day = date.getDate; // Day of the month (1-31)
const hours = date.getHours(); // Hours (0-23)
const minutes = date.getMinutes(); // Minutes (0-59)
const seconds = date.getSeconds(); // Seconds (0-59)
```

You can format date objects into human readable strings using methods like toLocaleDateString and toLocaleTimeString.

```js
const date = new Date();
const formattedDate = date.toLocaleDateString(); // E.g., "11/15/2023"
const formattedTime = date.toLocaleTimeString(); // E.g., "1:30:45 PM"
```

## Timing Function:

Timing functions are essential for controlling the flow of your Javascript code. They enable you to create delays, schedule repetitive tasks, and manage animations.

- setTimeout function:

The setTimeout function schedules the execution of a function after a specified delay in milliseconds.

```js
setTimeout(() => {
  console.log("This message appears after a delay");
}, 2000);
```

- setInterval function:

setInterval is a built in Javascript function that schedules the repeated execution of a specified function at a specified time interval.

The intervalID variable holds the ID returned by set interval, allowing you to later clear the interval using clearInterval() when needed.

```js
let count = 0;

const intervalID = setInterval(() => {
  console.log("Count: " + count);
  count++;

  if (count > 5) {
    clearInterval(intervalID); // stop after 6 iterations
  }
}, 1000);
```

## Debugging in JavaScript:

Debugging in JavaScript is the process of of identifying and fixing errors, bugs and issues in your JavaScript code. These errors can include syntax errors, logical errors, runtime errors, and other issues that prevent your JavaScript program from functioning as intended.

1. the simplest form of debugging involves adding console.log statements to your code.

2. You can insert the debugger statement directly into your code to halt execution and trigger the browser's debugger.

3. Every major web browser includes developer tools that provide debugging capabilities. You can access these tools by pressing F12 or right-clicking on a web page and selecting inspect or inspect element.

4. Try Catch block in JavaScript is a structured mechanism used for error handling. It allows you to manage and recover from runtime errors that might occur during the execution of your code.

- Try Catch block:

If an error occurs within the try-block, the catch block is executed. The catch block specifies how to handle the error. It takes an error object as a parameter which contains information about the error. Try-catch blocks allow you to isolate potential issues by wrapping specific code segments in try blocks you can focus on debugging those sections individually, making it easier to identify the root cause of errors.

When an unhandled error occurs in JavaScript, it can lead to application crashes or abrupt behavior. Try-catch blocks prevent this by handling errors, allowing your application to continue running.

The error object passed to the catch block contains valuable information such as the error type, message and stack trace.

You can use the throw statement within a try block to throw custom expectations based on specific conditions. This enables you to provide more meaningful error information, aiding in debugging.

```js
const array = [1, 2, 3];

// This code will throw an error because you cannot access properties of undefined. (reading 'name')
console.log(array[5].name); // here code execution get stoped.

// And this message will never be reached will not be logged.
console.log("hello world");
```

```js
try {
  const array = [1, 2, 3];

  // If an error occurs, it is caught by the catch block and we log an error message.
  console.log(array[5].name); // here the script continues to execute after error handling.
} catch (error) {
  console.log(error);
}

// the message program continues after error handling is logged.
console.log("hello world");
```

## Document Object Model (DOM):

The document object model, or DOM, is a programming interface for web documents. It represents the web page so that programs like JavaScript can change the document structure, content, and style. It provides a structured representation of the web page, making it easier for developers to interact with and manipulate web content.

1. The DOM allows developers to swiftly respond to user actions in real time with JavaScript. Developers leverage the DOM to access and modify page content and structure.

2. The DOM bridges browser differences, ensuring consistent functionality across various platforms and simplifying cross-browser compatibility.

3. The DOM facilitates real-time content updates without requiring a full page refresh.

4. The DOM allows developers to attach event listeners to the elements, enabling them to respond to user interactions.

5. The DOM supports assistive technologies like screen readers and ensures inclusivity for users with disabilities. Dynamic and interactive features facilitated by the DOM, contribute to an improved user experience.

- Document:

1. The term document refers to a web page or any XML document such as HTML, XHTML, or XML.
2. The DOM represents this document as a structured tree-like hierarchy with each part represented as a node.

- Object:

1. An object represents a JavaScript object that corresponds to an element, attribute, or content within the web document.
2. Each DOM element is an element of the web page, accessible and manipulable using JavaScript.

- Model:

1. The model denotes the structured and abstract representation of a web document.

- How the DOM works ?

When a web page is loaded in a browser, the browser creates a DOM representation of the page's structure. It forms a hierarchical tree structure with the document's root as the top node.

- $0 variable:

$0 is a special variable that you can use in the browser's development console as a quick reference to the currently selected DOM element in the elements panel in web development.

Open console tab within developer tools and type $0 in the console. For example, if you have selected a div element in the elements panel and you type $0 in the console, it will refer to that div element. Once you have the element referenced with $0, you can interact with it using JavaScript. This includes accessing its properties or modifying its attributes.

- Types of node:

1. Document node is the top level node representing the entire web page. The entire HTML document is represented as the document node. To access the entire document using the document object, open console and type

```js
var documentNode = document; // Now the entire document is accessible through the documentNode variable.

documentNode; // You will be able to see the entire document object.
```

2. Element nodes represent HTML elements such as div, p, a, and form the bulk of the DOM structure. To access the element node select the paragraph you want to inspect and select inspect. then navigate to the console tab and enter $0. It will output the HTML code and details of that specific element.

3. Attribute nodes represent attributes of HTML elements including id, class etc and provide additional information about an element. To access the attributes, select the anchor tag you want to inspect and select inspect then navigate to the console tab and enter $0 getAttribute("href"); command. this will give you the link inside href.

```js
$0 getAttribute("href") // https://www.example.com
```

You can also change the values of the attributes or modify them using this command.

```js
$0.getAttribute("href", "https://www.updated.com");
```

4. Text nodes contain the text content within elements. To retrieve the text of the selected element, use the $0.textContent command. This will give the text content.

## Accessing and Manipulating DOM Elements:

- Accessing:

Accessing the DOM means obtaining references to specific HTML elements on a web page.Once you access a part, you can perform actions like reading content, modifying attributes, or adding event listeners.

1. getElementById:

getElementById is a method in JavaScript used to access a specific HTML element within the DOM based on its unique ID attribute.

```html
<body>
  <h1 id="heading">Welcome to DOM manipulation</h1>
  <script>
    const headingElement = document.getElementById("heading");
    console.log(headingElement);
    // headingElement.innerHTML = "Hello World!";
  </script>
</body>
```

```
Output:

<h1 id="heading">Welcome to DOM manipulation</h1>
```

2. getElementsByClassName:

You can use the getElementsByClassName method in JavaScript to access multiple HTML elements within the DOM that share the same class name.

```html
<body>
  <p class="highlighted">This is a highlighted paragraph</p>
  <p class="highlighted">This is another highlighted paragraph</p>
  <script>
    // The result is a collection of elements stored in the variable highlightedElements.
    const highlightedElements = document.getElementsByClassName("highlighted");
    for (let i = 0; i < highlightedElements.length; i++) {
      // highlightedElements[i].textContent = "New highlighted paragraph";
      console.log(highlightedElements[i]);
    }
  </script>
</body>
```

```
Output:

<p class="highlighted">This is a highlighted paragraph</p>
<p class="highlighted">This is another highlighted paragraph</p>
```

3.  getElementsByTagName:

You can use the getElementsByTagName method in JavaScript to access multiple HTML elements within the DOM based on their tag name.

```html
<body>
  <h1>Heading</h1>
  <p>This is a paragraph</p>
  <p>This is another paragraph</p>
  <script>
    // The result is a collection of elements stored in the variable paragraphElements.
    const paragraphElements = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphElements.length; i++) {
      console.log(paragraphElements[i]);
    }
  </script>
</body>
```

```
Output:

<p>This is a paragraph</p>
<p>This is another paragraph</p>
```

4. querySelector:

querySelector is a versatile method in JavaScript used to access HTML elements within the DOM based on CSS-like selectors.

```html
<body>
  <p class="highlighted">This is a highlighted paragraph</p>
  <p id="id-highlighted">This is highlighted paragraph with ID</p>
  <div>This a regular paragraph</div>
  <script>
    const elementByClass = document.querySelector(".highlighted");
    console.log(elementByClass);

    const elementById = document.querySelector("#id-highlighted");
    console.log(elementById);

    const elementByTag = document.querySelector("div");
    console.log(elementByTag);
  </script>
</body>
```

```
Output:

<p class="highlighted">This is a highlighted paragraph</p>
<p id="id-highlighted">This is highlighted paragraph with ID</p>
<div>This a regular paragraph</div>
```

- Manipulating:

Manipulating elements using the DOM refers to changing the structure, content, attributes, or styles of HTML elements within a web page.

1. Changing content:

```html
<body>
  <p id="paragraph">This is some text</p>
  <script>
    const paragraph = document.getElementById("paragraph");
    // paragraph.innerHTML = "This is updated text";
    paragraph.textContent = "This is updated text";
  </script>
</body>
```

2. Changing attributes:

You can also alter the attributes of each element, which can affect their behavior or appearance.

```html
<body>
  <a id="my-link" href="https://www.google.com">Google</a>
  <script>
    const link = document.getElementById("my-link");
    //  Changing href attribute using the setAttribute method
    link.setAttribute("href", "https://www.facebook.com");
  </script>
</body>
```

3. Adding and Removing elements:

You can dynamically add new elements to the page or remove existing ones based on user interactions or other conditions.

```html
<body>
  <ul id="my-list">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  <script>
    const list = document.getElementById("my-list");
    // creates a new list item using createElement method
    const newItem = document.createElement("li");
    newItem.textContent = "Item 3";

    // appends it to the list using the appendChild method
    list.appendChild(newItem);
  </script>
</body>
```

4. Reordering elements:

You can change the order of elements within a parent container, which affects their display order on the page.

```html
<body>
  <div id="my-container">
    <p>First paragrapg</p>
    <p>Second paragrapg</p>
  </div>
  <script>
    const container = document.getElementById("my-container");
    const secondParagraph = document.querySelector("p:nth-child(2)");
    container.insertBefore(secondParagraph, container.querySelector("p"));
  </script>
</body>
```

## Browser Object Model (BOM):

The browser Object model BOM in JavaScript, is a crucial aspect that provides a structured way to interact with the web browser. It allows you to control browser behavior, manipulate the browser window, and access client-specific information. the BOM deals with the browser's environment. Some of the key components of BOM are as follows, window, document, navigator, screen, history, and location.

- Window Object:

The Global Window object represents the browser window or tab, and serves as the root of the BOM. All Global JavaScript objects and functions are part of the window object. The window object encompasses various properties and methods. For instance,

1. window.alert(message) displays a simple alert dialog.
2. window.confirm(message) shows a confirmation dialog.
3. window.open(url, name, specs, replace) opens a new browser window or tab.
4. you can also close the current window with a window.close().
5. manipulate the current URL using the window.location

The window object extends its functionalities with features like

1. setTimeout, for delayed function execution.
2. storage options, such as localStorage, and sessionStorage for client-side data storage.
3. Additionally, window.history provides access to the browser session's history.

- Navigator Object:

The navigator object gives information about the client's browser, including the browser's name, version, and supported features.

```js
const browserName = navigator.appName;
const browserVersion = navigator.appVersion;
```

- Screen Object:

The screen object details the user's screen, including its dimensions and color depth.

```js
const screenWidth = screen.width;
const screenHeight = screen.height;
```

- History Object:

The history object represents the browser's session history, enabling navigation in the user's browsing history.

```js
history.back(); // navigates back one page

history.forward(); // navigate forward one page
```

- Location Objet:

The location object provides information about the current URL, and allows manipulation of the URL, facilitating redirection to other web pages.

```js
const currentURL = location.href;
location.href = "https://example.com";
```

- DOM vs BOM:

1. The DOM represents a web page's structure and content, offering a hierarchical, easy access and manipulation model. Meanwhile, the BOM provides access to browser specific features, settings, and behaviors, enabling control over windows, navigation, and user interactions.

2. The DOM consists of a tree-like structure of HTML elements, attributes, and text nodes, representing the web page's content, accessible through the document object. The BOM includes various objects and features like a window, navigator, screen, history, and location, providing access to browser-specific information and functionalities.

3. The DOM allows dynamic manipulation of HTML elements, including text, attributes, styles, and structure. Meanwhile, the BOM goes beyond content, empowering control over browser features like alerts, windows, history, and client information.

4. DOM is organized hierarchically and represents HTML elements, attributes, and text nodes as notes, forming a structured layout. In contrast, the BOM lacks a hierarchical structure with loosely related objects offering independent access.

5. Accessing the DOM involves interacting through the document object, like using document.getElementById Element ID. For the BOM, direct interaction with objects occurs through the window object, for example, window.alert etc.

6. DOM usage includes modifying text content, adding or removing HTML elements, updating attributes, changing styles, and handling events within the web page. BOM usage includes opening new browser windows or tabs, controlling browser history, displaying alerts, managing client information, and handling browser-specific tasks.

## Traversing the DOM:

The process of traversing the DOM involves navigating and manipulating the structure and content of an HTML document using JavaScript. The DOM represents a web page as a hierarchical tree of objects, where each HTML element is a node in the tree. Traversing the DOM allows you to programmatically access, manipulate, and interact with these nodes.

- Navigating parent and child elements within the DOM:

Navigating parent and child elements within the DOM involves moving up and down the tree-like structure of an HTML document using JavaScript.

1. ParentNode property - is used to access the parent node of an element. It allows movement up one level in the DOM tree to access elements containing or surrounding the element.

2. ChildNodes property - returns a NodeList containing all child nodes of an element. ChildNodes can include elements, text nodes, comments and other types of nodes that are direct descendants of the element.

3. FirstChild and lastChild properties - allow access to the first and last child nodes of an element. These are useful for accessing the first and last elements or nodes within a parent element.

```html
<html>
  <body>
    <div id="parent">
      <p>Child 1</p>
      <p>Child 2</p>
    </div>
      <script>
        const parent = document.getElementById("parent");

        // get all childNodes
        const childNodes =parent.childNodes; // NodeList
        console.log(childNodes);

        const firstChild = parent.firstChild;
        const lastChild = parent.lastChild;
        console.log(firstChild); // Outputs: "Child 1"
        console.log(lastChild); // Outputs: "Child 2"
      </script>
  </body>
</html
```

- Navigating sibling elements:

Navigating sibling elements involves moving horizontally within the hierarchical tree structure of an HTML document. This process allows access and manipulation of elements that share the same parent node.

1. nextSibling and previousSibling properties - allow access to the next and previous sibling nodes at the same hierarchical level.

2. FirstChild and lastChild properties - allow access to the first and last child nodes of the current element.

```html
<html>
  <body>
    <div>
      <p>First</p>
      <p>Middle</p>
      <p>last</p>
    </div>
    <script>
      const middle = document.querySelector("p:nth-child (2)"); // selects the middle paragraph element.

      const previousSibling = middle.previousSibling;
      const nextSibling = middle.nextSibling;
      console.log(previousSibling.textContent); // Outputs: "First"
      console.log(nextSibling.textContent); // Outputs: "Last"

      const firstChild = middle.firstChild;
      const lastChild = middle.lastChild;

      console.log(firstChild.textContent); // Outputs: null (paragraph does not have child elements)
      console.log(lastonala.textcontent); // Outputs: null (paragraph does not have child elements)
    </script>
  </body>
</html>
```

- Finding elements within a container:

Finding elements within a container involves searching for and accessing HTML elements within a specific parent or container element.

1. This method allows you to find the first element that matches the specified CSS selector within a given container.
2. It returns null if no matching element is found.
3. This method returns a NodeList containing all elements that match the specified CSS selector within a given container.
4. It returns an empty node list if no matching elements are found.

```html
<html>
  <body>
    <div id="container">
      <p class="myClass">Paragraph 1</p>
      <p class="myClass">Paragraph 2</p>
      <p>Paragraph 3</p>
    </div>
    <script>
      const container = document.getElementById("container");

      // to find first matching element.
      const singleElement = container.querySelector(".myClass");
      console.log(singleElement.textContent); // Outputs: "Paragraph 1"

      const multipleElements = container.querySelectorAll(".myClass");
      console.log(multipleElements); // NodeList
      console.log(multipleElements[1].textContent); // Outputs: "Paragraph 2"
    </script>
  </body>
</html>
```

- Styling DOM Elements:

1. style property - You can directly access and modify the inline styles of an HTML element using the style property. This method is beneficial for dynamically adjusting the appearance of elements based on user interactions or events.

```html
<html>
  <body>
    <button id="myBtn" onclick="updateStyle()">Click Me</button>
    <button id="myBtn1">Click Me 2</button>
    <script>
      const button = document.getElementById("myBtn1");
      const button1 = document.getElementById("myBtn1");

      function updateStyle() {
        button.style.backgroundColor = "blue";
        button.style.color = "white";
        button.style.fontSize = "16px";
      }
    </script>
  </body>
</html>
```

2. classList property - The class list property facilitates adding, removing, or toggling CSS classes on an element. This property is especially useful for applying predefined styles from CSS classes and enables the toggling of classes in response to user interactions.

```
element.classList.add(className)
element.classList.remove(className)
element.classList.toggle(className)
element.classList.contains(className)
```

3. setAttribute - The setAttribute method allows you to set or modify the style attribute of an element using a string containing inline CSS.While effective, the set attribute process replaces the entire style attribute of an element.

```html
<html>
  <body>
    <p id="myText" style="color: red">This is a red text</p>
    <script>
      const text = document.getElementById("myText");
      text.setAttribute("style", "color: blue; font-size: 20px;");
    </script>
  </body>
</html>
```

4. remove property - the remove property method is useful for selectively removing specific CSS properties from an element's inline style, this method provides a way to reset or adjust styling on a granular level.

```html
<html>
  <body>
    <p id="myText" style="color: red; font-size: 30px;">This is a red text</p>
    <script>
      const text = document.getElementById("myText");
      text.style.removeProperty("font-size");
    </script>
  </body>
</html>
```

## JSON:

JSON, or JavaScript object notation is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is a text-based format used for structuring data in a way that is both human readable and machine readable.

1. It uses a simple syntax with key value pairs and arrays, making it accessible to developers and non developers alike.

2. JSON is widely used for exchanging data between a server and a web application or between different parts of a software system.

3. JSON is equally easy for machines to parse, making it a popular choice for data serialization and deserialization. This means that software applications can easily convert JSON data into the internal data structures of the programming language and vice versa.

4. JSON is not tied to any specific programming language, which means it can be used in a wide range of programming environments.

- JSON vs Object:

1.  JSON is a text based data interchange format. It represents data as a string.

    Whereas an object is a fundamental data structure that can hold data and methods to manipulate that data.

2.  JSON is a way to serialize and transmit data, primarily used for data exchange between systems or for storing data and files.

    Objects are typically used to model real world entities or abstract concepts within a software application.

3.  JSON has a specific syntax and rules that must be followed. It uses key value pairs and is limited to a specific set of data
    types including strings, numbers, Booleans, arrays and other JSON objects.

    In programming, objects are not restricted to a specific syntax or set of data types. They are a part of the programming language and can include a wide variety of data types, such as integers, floats, custom data structures, and more.

4.  JSON is primarily used for data interchange. It is used to transmit data between a client and a server, between different parts of  
    software system or to store configuration data in files.

    While objects in programming are used to model and manipulate data within the application itself.

```Json
{
  "name": "Surya Karmakar",
  "age": 24
}
```

```js
const person = {
  name: "Surya Karmakar",
  age: 24,
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  },
};
```
