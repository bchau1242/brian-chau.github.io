 /**
 * FUNCTIONS:
 * 0. Functions are a block of code that performs a certain task. 
 * 1. The use of function is divided into two stages. We must first declare or define a function before we can build it. 
 * The keyword function is used to declare a function. Following that are parenthesis, which will hold a number of required inputs separated by commas.
 * These inputs are called parameters and they should be named accordingly so that it's clear what must be provided when the function is performed. 
 * 0. Parameters are rather declared variables specifically for that function, that is hoisted to the top on the function scope. 
 * 1. A single output is returned by the function and returns undefined by default. Otherwise, we may use the return keyword followed by a value. When the code block 
 * reaches a return statement, the function will stop executing. 
 * 2. Functions can be named, assigned to variables or constants, or be anonymous.  
 * 3. The second stage when using a function, is the invocation or function call. This will invoke the function to execute or run its code block. 
 * When we call a function we can pass in arguments to use within the function. The arguments give the parameters values to use. To call a function, we simply reference
 * the funcion name or variable name that it is assisgned to. We then pass any necessary arguments in paranthesis. 
 * 4. There are two types of scopes: global and local. Local scope or function scope are local to a function body, whereas global scopes are everything outside of the function. 
 * Functions, in general, enclose a scope and protect its variables from parent scopes, such as the global scope. Variables in the parent scope can be accessed by 
 * functions. Parent scope, on the other hand, are unable to access variables in child scopes. A type of local scope that involves any pair of curly braces is known as block scope. 
 * Block scoped variables are those declared using let or const. Curly braces are ignored by variables defined with var unless they are part of a function. Nested scopes are 
 * formed when functions are declared within other functions.
 * 5. A closure is a collection of functions that have been grouped together (enclosed) with references to their context. To put it simply, a closure allows an inner function 
 * to access the scope of an outer function. Closures are formed every time a function is created, during function creation time.
 */

 // 1. Declaration // 
 // Naming a function add and giving it the parameters of x and y. This function will add two values and return its sum. At this stage the function will not run until invoked.//
 function add(x, y) {
    return x + y;
 };

// 2. Invocation //
// Calling the function then executes the function code block with the arguments passed as the parameters. //
add(4, 2); // prints => 6 

// 3. Named Function // 
// This function is given the name fullName. Named function declarations are hoisted to the top of their scope. 
// Because of this, the function can be invoked before the actual location of decalaration. //
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
};
console.log(fullName('Brian', 'Chau')); // prints => Brian Chau

// 4. Anonymous Function // 
// In the first example, we declare a variable named anon and assign it a value of an anonymous function. It is anonymous because it is not named. 
// In the second example, we call a named function and pass an anonymous function as its second argument.  
const anon = function() {
    return 'This is an anonymous function';
};
console.log(anon()); // prints => 'This is an anonymous function

function anonFunc(str, func) {
    return func(str);
};
console.log(anonFunc('tHis Is alSO aN anOnYMOus fUncTioN', function(string) { // prints => THIS IS ALSO AN ANONYMOUS FUNCTION
    return string.toUpperCase();
}));

// 5. Scope //
// Variable x is declared in the global scope. When we first log x, because the function local() has not been called yet, it will refer to the first variable x. 
// When the function is called and we log x, x is allowed to reassign the global scope variable x within the function scope and will print the updated string.
// y is declared within the local scope. Attempting to log the value of y to the console will result in an error because we can not access the variable outside of the scope.    
var x = 'Global scope because outside of function scope.';
function local() {
    x = 'Local scope because inside of function scope.'
    let y = 'This is in the local scope.'
}

console.log(x); // prints => Global scope because outside of function scope.
local();
console.log(x); // prints => Local scope because inside of function scope.
console.log(y); // prints => ReferenceError: y is not defined. 

// 6. Closure // 
// There is a closure within the makeCounter function when we return addTwo() function from inside the makeCounter() function. The addTwo() function executes 
// and accesses the variable count from the outer function scope and returns a value referencing count. 
function makeCounter() {
    let count = 0;
  
    function addTwo() {
        return count += 2;
    };
    return addTwo();
}
let counter = makeCounter();
console.log(counter); // prints => 2