/**
 * OPERATORS: 
 * 0. Operators are categorized depending on what they do. The different types of operators include assignment, arithmetic, comparison, logical, unary and ternary operators.
 * 1. Used to execute mathematical computations on operands that can be of any type. 
 */

// 1. Arithmetic Operator //
// Arithmetic opertor can take numerical values and return a result of a single numerical value. // 
// 1a. Addition // 
// Add numerical values using the (+) operator. 
let add = 5 + 5; 
console.log(add); // prints => 10

// 1b. Subraction // 
// Subract numerical values using the (-) operator. 
let subract = add - 3;
console.log(subract); // prints => 7

// 1c. Multiplication //
// Multiplies numerical values using the (*) operator.
let multiply = subract * 6;  
console.log(multiply); // prints => 42

// 1d. Division // 
// Divides numerical values using the (/) operator. 
let divide = multiply / 4;
console.log(divide); // prints => 10.5

// 1e. Remainder // 
// Divides numerical values and returns the remainder using the (%).
let remainder = 10 % 4;
console.log(remainder); // prints => 2

// 1f. Exponentiation operator // 
// Exponentiates a value by a number using (**) operator.
let exponentiate = 3 ** 3;
console.log(exponentiate); // prints => 27

// 1g. Increment // 
// Unary operator that adds one to an operand. 
let increment = ++exponentiate;
console.log(increment); // prints => 28

// 1h. Decrement //
// Unary operator that subracts one to an operand. 
let decrement = --increment;
console.log(decrement); // prints => 27

// 1i. Unary Negation //
// Unary operator that returns the negation of an operand.
let negation = -decrement; 
console.log(negation); // prints => -27

// 1j. Unary Plus // 
// Unary operator that aims to change the value into a number. 
let plus = +"6";
console.log(plus); // prints => 6 

// 2. Assignment Operator // 
// Assigns or reassigns a value to a variable. //
// 2a. Assignment //
// Assigns a value to an operand with the equal(=) sign. 
var num = 4;
console.log(num); // prints => 4 

// 2b. Addition Assignment //
// Adds and assigns the value of the expression with the plus equal(+=) sign. Same as num = num + 1; 
num += 1;
console.log(num); // prints => 5

// 2c. Subtraction Assignment // 
// Subtracts and assigns the value of the expression with the minus equal(-=) sign. Same as num = num - 2;
num -= 2;
console.log(num); // prints => 3

// 2d. Multiplication Assignment // 
// Mutliplies and assigns the value of the expression with the multiply equal(*=) sign. Same as num = num * 6; 
num *= 6;
console.log(num); // prints => 18

// 2e. Division Assignment // 
// Divides and assigns the value of the expression with the divide equal(/=) sign. Same as num = num / 2;
num /= 2;
console.log(num); // prints => 9

// 2f. Remainder Assignment // 
// Divides a variable by the value of the right operand and assigns the remainder the the variable. Same as num = num % 6;
num %= 6;
console.log(num); // prints => 3

// 2g. Exponentiation Assignment //
// Exponentiates and assigns the value of the expression with the exponentiate equal(**=) sign. Same as num = num ** 3;
num **= 3;
console.log(num); // prints => 27

// 3. Comparison Operator //
// Comparison operators compares two operands and returns a boolean value of true or false. Number, string, and object values 
// can all be compared.   
// 3a. Equal Operator // 
// Compares a value to check if another value is loosely equal to each other. 
let equal = 3 == '3'; 
console.log(equal); // prints => true; 

// 3b. Not Equal Operator // 
// Compares two operands to check if they are loosely not equal to each other.
let notEqual = 3 != '3.5'; 
console.log(notEqual); // prints => true 

// 3c. Strict Equal //
// Compares two operands to check if they are strictly equal to each other. // 
let strictlyEqual = 'three' === 'three';
console.log(strictlyEqual); // prints => true 

// 3d. Strict Not Equal // 
// Compares two operands to check if they are strictly not equal to each other. // 
let strictlyNotEqual = 'three' !== 'Three';
console.log(strictlyNotEqual); // prints => true 

// 3e. Greater Than // 
// Compares two operands to check if one is greater than the other. // 
let greaterThan = 'three' > 'six';
console.log(greaterThan); // prints => true 

// 3f. Greater Than or Equal //
// Compares two operands to check if one is greater than or equal to the other. // 
let greaterOrEqual = 'two' >= 'six';
console.log(greaterOrEqual); // prints => true

// 3g. Less Than // 
// Compares two operands to check if one is less than the other. //
let lessThan = -10 < -3;
console.log(lessThan); // prints => true

// 3g. Less Than or Equal // 
// Compares two operands to check if one is less than or equal to the other. //  
let lessOrEqual = 0 <= 0; 
console.log(lessOrEqual); // prints => true

// 4. Logical Operators //
// Used with Boolean values to return a boolean value. 
// 4a. AND // 
// Returns true if both operands result to true using (&&) operator. If one operand results to false, the expression returns false. 
let and = 4 >= 4 && 'eight' === 'eight'; 
console.log(and); // prints => true; 

// 4b. OR // 
// Returns true if one operand results to true using (||) operator. 
let or = 16 !== '16' || 'sixteen' === 'sixteen';
console.log(or); // prints => true;

// 4c. NOT // 
// Returns true if operand is falsy and false if operand is truthy using (!) operand. 
let str; 
let not = !str;
console.log(not); // prints => true 

str = 'truthy';
console.log(!str) // prints => false  

// 5. String Operator // 
// Used to concatenate two string values together using the (+) operator, returning one string value. 
let str1 = 'Hi, my name is ';
let fullName = 'Brian Chau.';
console.log(str1 + fullName); // prints => Hi, my name is Brian Chau.

// 6. Ternary Operator // 
// Syntax: condition ? val1 : val2; Results to one value or the other depending on the condition. Same as if statement. If condition is true, return val1, else is not true, return val2.
var lightSwitch = 'on';
let ternary = (lightSwitch === 'on') ? 'leave light on' : 'turn light on';
console.log(ternary); // prints => leave light on  