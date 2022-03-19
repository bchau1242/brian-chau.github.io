/** 
 * VARIABLES:
 * 0. Identifiers that hold values of data in memory. Variables act like containers that hold different data types such as a Number,  
 String, Boolean, Array, Object or Functions. Variables are called so because unlike "constants"(another identifier), variables 
 can be re-assigned to a different value.
 * 1. There are two phases when using variables: declaration and initialization.
 * 2. To create a variable, we start off by declaring the keyword "var" followed by giving the vairable a name. We can then initialize 
 or assign the variable a value. 
*/

// 1. Declaration // 
// When we declare a variable, in a way we are creating a box and writing the name "myDog" on the box. There is nothing in the box yet, //
// therefore it has not been initialized. //
var myDog;
console.log(myDog); // prints => undefined

// 2. Initialization or Assignment
// When we initialize or assign a value to the variable, we are simply giving the box a value to hold. //
myDog = 'Beau';
console.log(myDog); // prints => Beau

// 3. Re-assignment 
// When we re-assign a value to a variable that has already been declared and initialized. The box no longer hold the presvious value. //
myDog = 'Bumi';
console.log(myDog); // prints => Bumi 