; /**
 * DATA TYPES:
 * 0. Data types are the types of value. In javascript language, types are divided into 2 sets of types; primitive/simple and Complex.
 * 1. Primitive/Simple data types consists of Number, String, Boolean, NaN, undefined, and null. They are defined as immutable, meaning they cannot be changed.
 * Operations done on simple values will return new simple values, but will not affect or change the original value. When you pass a value, every time you assign a value to a variable, 
 * a copy of that value is created. This is called copy by value.    
 * 2. Complex data types consists of objects, arrays, and functions. Unlike simple data types, complex data types are mutable; meaning they can be changed. They are copied by reference, so 
 * when an object is created, a reference to that object is given to us. When two variables contain the same reference, changing the object will result in also changing the two variables.   
 * 3. Infinity is a global property resulting in a positive numeric value that represents infinity and is greater than any other number. -Infinity is the inverse, resulting in a negative value
 * that is less than any other number.   
 */

// 1. Primitive/Simple Data Types //  
// 1a. Number // 
// Numbers are used to represent data in numeric form. 
let num = 18; 
console.log(typeof num); // => number 

// 1b. Strings // 
// Strings are used to represent data in text form. To create a string, surround the text with double "" or single '' quotes.
let str = 'Brian'; 
console.log(typeof str); // => string

// 1c. Boolean // 
// Booleans are comparative data types that result to either two values: true or false. //
let bool = true === false; 
console.log(typeof bool); // => boolean
let isGreater = 52 > 16;
console.log(isGreater); // prints => true 

// 1d. NaN // 
// NaN is a value representing Not-A-Number // 
function isNumber(x) {
    if(isNaN(x)) { // Checks if x is not a number. 
        return NaN; // If x is not a number, return NaN.
    } else {
        return x; // If x is a number, return x.
    }
}
console.log(isNumber('1')); // => 1
console.log(isNumber('NotANumber')); // NaN 

// 1e. Undefined // 
// An unassigned variable will log to the console undefined. // 
let notDefined;
console.log(typeof notDefined); // => undefined

// 1f. Null // 
// A null value represents a nonexistent or invalid object. If null is returned to your console, it means that the expected object could not be created. Null is also a falsy value. //
let myVar = null;

if (myVar) {
    console.log('myVar is not null'); 
} else {
    console.log('myVar is null'); // prints => myVar is null because myVar results in a falsy value.
}

console.log(typeof null); // prints => object 

// 2. Complex // 
// 2a. Object // 
// Objects are a collection of properties that holds property values of any type, including other objects. // 
let dogs = { // An object is a collection inside curly brackets.
    name: 'Beau', // Like variables, we declare a property with an identifier and initialize it behind a colon. 
    age: 5, // We can puts different types of data in an object like strings, numbers, arrays, and functions.
    cute: true,
    sounds: ['bark', 'woof', 'howl'],
    makeSound: function() {
        return dogs.sounds[Math.floor(Math.random() * dogs.sounds.length)];
    }
}
console.log(typeof dogs); // prints => object 

// 2b. Array // 
// An array is collection that can hold multiple various data types under one variable name.  // 
let arr = ['string', 42, false, ['arr'], function(){return 'function'}]; // The syntax for an array starts by declaring a variable followed by initializing a value inside [] brackets.
console.log(Array.isArray(arr)); // prints => true

// 2c. Function // 
// A function is a set of statements that takes some input and produces an output value. //
function func() { // To create a function, we start with the function keyword, function name, and paranthesis(we can place parameters inside the paranthesis)
    return 'This is a function'; // Once the function is invoked, the function code block will run. 
};
console.log(func()); // => prints This is a function

// 3a. Copy by Value // 
// When we create a variable and assign it a primitive type, it will store the exact value. //
let a = 1; // a is given the value of 1
let b = a; // b is copying the value of a, which is 1
b = b + 2; // b will update to the value of b previously plus two, but will not affect the value of a
console.log(a); // prints => 1 
console.log(b); // prints => 3

// 3b. Copy by Reference //
// When we create a variable and assign it an object or array, it will store a reference to the memory of the value. //
let x = [1]; // x will store a reference to the memory of the array containing 1.
let y = x; // y will copy the reference of x. y = [1];
y.push(2); // add the value 2 to y. Because y and x point or reference to the same memory, x is also changed. y = [1, 2]; x = [1, 2];
console.log(x); // prints => [1, 2] 
console.log(y); // prints => [1, 2]

// 4. Infinity and -Infinity //
// Infinity and - Infinity results to a number data type. 10 < Infinity results to true 10 > Infinity results to false because Infinity is greater than any integer. //
// -10 > -Infinity results to true and -10 < -Infinity results to false because -Infinity will always be less than any number. //
console.log(typeof Infinity); // prints => number 
console.log(10 < Infinity); // prints => true 
console.log(10 > Infinity); // prints => false
console.log(-10 > -Infinity); // prints => true 
console.log(-10 < -Infinity); // prints => false