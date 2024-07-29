## JavaScript:

1. JavaScript is executed in web browsers, making it an essential tool for enhancing the user experience. Here are a couple of things JavaScript is known for. Manipulating the DOM: JavaScript can change a web page's content structure and style. It's like having a magic wand for web elements. Handling events: From button clicks to mouse movements, JavaScript can respond to various user interactions, making websites more engaging.

2. JavaScript is a fundamental part of web development and is used in various ways. Enhancing user experience: JavaScript can validate form data, create interactive forms, and provide real time feedback to users. Dynamic web content: It can load new content without refreshing the entire page like real time social media feeds. Animations and visual effects: JavaScript can create animations, sliders, and other visual effects to improve website aesthetics.

## How to use JS:

1. In-line JavaScript: you can include JavaScript code directly in your HTML file using the script tag within the body.

```html
<h1>
  <script>
    // your js code
  </script>
</h1>
```

1. External JavaScript file: it's recommended to put your JavaScript code in a separate JS file and link it to your HTML file using
   the script tag with a SRC attribute.

Step 1, create a separate JS file,e.g. script.js

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

Variables act as containers for various types of information or values. You can think of a variable as a named storage location that holds data, and you can use this data in your JavaScript code.

Variable names must start with a letter, underscore, or dollar sign, and can contain letters, numbers, underscores, and dollar signs.

```js
name = "John";
```

Initialization of a variable, you can optionally assign an initial value to it.

To create a variable in JavaScript, you also need to declare it using one of three keywords, var, let, or const.

```js
function example() {
  if (true) {
    var x = 10;
  }
  console.log(x); // x is available outside of the if block
}
```

Var was the original way to declare variables in JavaScript, and it has function level scope. This means that a variable declared with var is available throughout the entire function in which it is declared.

```js
function example() {
  if (true) {
    let x = 10;
  }
  console.log(x); // x is not available outside of the if block
}
```

Let was introduced in ES6 and provides block level scoping. This means, that a variable declared with let is only available within the block enclosed by curly braces in which it is defined.

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

Variables declared with let can be reassigned, but not redeclared within the same block.

```js
const pi = 3.14;
console.log(pix);
```

Const is also introduced in ES6 and is used to declare variables with constant values. Once you assign a value to a const variable, you cannot reassign it a different value. It also has block level scoping. Variables declared with const are constant and can neither be reassigned nor redeclared within the same block.

- Data types:

JavaScript is a dynamically typed language, which means that you don't need to explicitly specify the data type of a variable when you declare it. The data type is determined dynamically at runtime based on the value you assign to the variable.

1. Primiive data types

a. Strings - represents text. A string is enclosed in single or double quotes.

```js
let name = "John";
```

b. Number - represents both integers and floating-point numbers

```js
let age = 30;
let price = 9.99;
```

c. Boolean - represents true or false values.

```js
let isStudent = true;
```

d. Undefined - represents a variable that has been declared, but hasn't been assigned a value.

```js
let x;
```

Null represents an empty value or absence of any object value.

```js
let emptyValue = null;
```

2. Composite data types

Composite data types are those that can hold and manage multiple values as a single unit. These data types are used to organize and manipulate collections of data, making it easier to work with more complex structures.

a. Array - and object are two composite data types. An array in JavaScript is a list like data structure for storing multiple value.

```js
const array = [1, 2, 3, 4, 5];
```

b. object is a collection of key value pairs used for structured data storage.

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

1. if statement - the if statement is used to execute a block of code if a specified condition is true, if the condition is false, the code block is skipped.

```js
let age = 25;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

2. else statement - the else statement is used to specify a block of code to be executed if the condition in the if statement is false.

```js
let age = 10;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

3. else if - else if statement allows you to test multiple conditions sequentially, especially when you have more than two possible outcomes.

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

4. Nested if else statements - Nested if else statements are a common programming construct in JavaScript and many other programming languages. They allow you to test multiple conditions and execute different blocks of code based on the results of those conditions.

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

5. Switch statement - switch statement allows you to compare a value against multiple possible case values and execute code based on the first matching case.

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

6. Ternary operator - ternary operator is a concise way to write conditional statements such as if else condition.

```js
let age = 20;
let canVote = age >= 18 ? "yes" : "no";
```

## Looping and Iteration:

Looping and iterations in JavaScript are techniques that allow you to execute a block of code repeatedly. They are used to perform repetitive tasks, traverse data structures like arrays and objects, and handle various scenarios in your code. They allow you to iterate through arrays, perform actions on each element, and control the flow of your code dynamically.

1. for loop - It consists of three parts, initialization, condition, and update.

Initialization, this part is where you initialize a loop control variable, typically with an initial value.

Condition, this is a Boolean expression that is evaluated before each iteration. If the condition is true, the loop continues, otherwise it terminates.

Update, this part is responsible for changing the loop control variable in each iteration, often incrementing or decrementing its value

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

2. while loop - it continually evaluates the condition before each iteration.

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

3. do while loop - Unlike the for or while loops, a do while loop guarantees that the code block will execute at least once, even if the condition is initially false.

The structure of a do while loop is as follows. The code block is executed first, then the condition is checked. If the condition is true, the loop continues and the code block is executed again. If the condition is false, the loop terminates.

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

##
