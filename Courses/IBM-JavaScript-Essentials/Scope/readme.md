## What you will learn

In this lab, you will develop an understanding of JavaScript variables, including var, let, and const. JavaScript variables act as containers for storing data, allowing dynamic programming by facilitating the storage, manipulation, and retrieval of values across various sections of code within applications. You will learn how to use variables to enhance code readability and maintainability, enabling efficient management and reuse of variable values throughout your entire programs.

## Learning objectives

1. Understand where variables work: Learn how 'var,' 'let,' and 'const' variables operate in different parts of your code, where you can use them, and potential issues they might cause.

2. Know how variables behave: Discover the distinct behaviors of 'var,' 'let,' and 'const.' Understand how they can change and when they remain constant. Learn why declaring variables with 'var,' 'let,' and 'const' is essential for maintaining safe and reliable data.

3. Learn the right way to use them: Determine when to use 'let' for changing data, 'const' for constants, and why using 'var' might not be the best choice anymore. It's important to selecting the right variable for the code.

4. Make your code stronger: Through a deep understanding of 'var,' 'let,' and 'const,' you'll write more resilient code less prone to breakage. Avoid bugs and create code that is not only comprehensible to you but also to others, ensuring it operates smoothly.

## Summary

1.  Variable scope overview:

Global scope: Variables declared outside any block or function have a global scope and are accessible throughout the entire script.

Block scope: Variables declared within curly braces {} have block scope, accessible only within that block.

Function scope: Variables declared within a function have function scope, limited to that function's block.

2.  Variable declaration and initialization:

Used var, let, and const to declare and initialize variables in different scopes: global, block, and function.

Demonstrated the behavior of these variables in respective scopes by accessing them outside their defined scope.

3.  Output and scope analysis:

Global variables were accessible everywhere in the script.

Block-scoped variables (inside {}) had limited accessibility, resulting in ReferenceErrors when accessed outside their blocks.

Function-scoped variables (inside a function) also led to ReferenceErrors when accessed outside the function.
