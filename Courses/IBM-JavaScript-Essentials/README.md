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
