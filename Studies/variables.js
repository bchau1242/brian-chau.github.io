/** 
 * VARIABLES:
 * 0. Identifiers that hold values of data in memory. Variables act like containers that hold different data types such as a Number,  
 String, Boolean, Array, Object or Functions. Variables are called so because unlike "constants"(another identifier), variables 
 can be re-assigned to a different value.
 * 1. There are two phases when using variables: declaration and initialization.
 * 2. To create a variable, we start off by declaring the keyword "var" followed by giving the vairable a name. We can then initialize 
 or assign the variable a value. 
 * 3. Name your variables usign camelCase.
 * 4. Are globally scoped; therefore are hoisted to the top. You can use the variable before it is declared. 
 * 
 * Let:
 * 0. Like variables, they are containers that hold values. 
 * 1. Cannot be redeclared. This reason is to not accidentally redeclare a variable.  
 * 2. Block scoped. Let variables declared inside within a block scope cannot be accessed from outside the block.
 * 3. Hoisted to the top of the block scope. 
 * 
 * Constant: 
 * 0. Containers that hold values that cannot be changed after declaration and initialization.  
 * 1. Must be assigned a value immediately and cannot be left unassigned or undefined. Value it hold is still mutable. 
 * 2. Block scoped. Like let variables, constants declared inside a block scope cannot be accessed from outside the block.
 * 3. Hoised to the top of the block scope.   
*/

// Var // 

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

// Let // 

// 1. Declaration // 
// We can delcare a let variable without assigning it a value. // 
let myDog; 
console.log(myDog); // prints => undefined 

// 2. Initialization or Assignment
// A value can be assigned to the let variable after declaration. //
myDog = 'Beau';
console.log(myDog); // prints => Beau

// 3. Redclaration //
// Redeclaring a let variable will log to the console an error. //
let myDog = 'Beau';
console.log(myDog); // prints => SyntaxError: Identidier 'myDog' has already been declared

// 4. Reassignment //
// Reassignment can be done  //
myDog = 'Lucky'; 
console.log(myDog); // prints => Lucky
if(myDog === 'Lucky') {
    myDog = 'Mia';
    console.log(myDog); // prints => Mia
}
console.log(myDog); // prints => Mia

// 5. Hoisting 
// The let variable is inside the { } brackets and can only be accessed within that block. //
if(myDog === 'Beau') {
    let dog2 = 'Bumi';
    console.log(dog2); // prints => Bumi
} 
console.log(dog2); // prints => ReferenceError: dog2 is not defined. 

// Constants // 

// 1. Declaration & Initialization or Assignment // 
// Const variables must be delcares and initialized at the same time. 
const myDog = 'Beau';
console.log(myDog); // prints => Beau 

// 2. Redeclaration // 
// Constants cannot be redeclared. 
const myDog = 'Bumi';
console.log(myDog) // prints => SyntaxError: Identidier 'myDog' has already been declared

// 3. Reassignment // 
// Once assigned, they cannot be reassigned. //
myDog = 'Bumi';
console.log(myDog); // prints => TypeError: Assignment to constant variable.