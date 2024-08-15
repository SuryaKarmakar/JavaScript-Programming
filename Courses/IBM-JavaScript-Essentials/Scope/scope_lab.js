// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
  // Block scope
  var blockVar = "I'm a block-scoped var";
  let blockLet = "I'm a block-scoped let";
  const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// Block Scope

// You will see output for blockVar, because it can be accessed outside the curly brackets {}
console.log(blockVar);

/*  But you will see ReferenceError for blockLet because it cannot be accessed outside the curly brackets due to which it is known as block scoped variables. Such variables can only be accessed within curly brackets. 
You will see the same error for const as well. */
// console.log(blockLet);
// console.log(blockConst);

// In this step, you will explore how function-scoped variables work.

function show() {
  var functionVar = "I'm a block-scoped var";
  let functionLet = "I'm a block-scoped let";
  const functionConst = "I'm a block-scoped const";
}
show();

/* You will see ReferenceError for functionVar because it cannot be accessed outside the function making it a function scoped variable */
console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError
