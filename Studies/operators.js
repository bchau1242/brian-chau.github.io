/**
 * Operators 
 * 0. Operators are categorized depending on what they do. The different types of operators include assignment, arithmetic, comparison, logical, unary and ternary operators.
 * 1. Used to execute mathematical computations on operands that can be of any type. 
 */

// Assignment Operator // 
// 1a. Assignment //
// Assigns a value to an operand with the equal(=) sign. 
var num = 4;
console.log(num); // prints => 4 

// 1b. Addition Assignment //
// Adds and assigns the value of the expression with the plus equal(+=) sign. Same as num = num + 1; 
num += 1;
console.log(num); // prints => 5

// 1c. Subtraction Assignment // 
// Subtracts and assigns the value of the expression with the minus equal(-=) sign. Same as num = num - 2;
num -= 2;
console.log(num); // prints => 3

// 1d. Multiplication Assignment // 
// Mutliplies and assigns the value of the expression with the multiply equal(*=) sign. Same as num = num * 6; 
num *= 6;
console.log(num); // prints => 18

// 1e. Division Assignment // 
// Divides and assigns the value of the expression with the divide equal(/=) sign. Same as num = num / 2;
num /= 2;
console.log(num); // prints => 9

// 1f. Remainder Assignment // 
// Divides a variable by the value of the right operand and assigns the remainder the the variable. Same as num = num % 6;
num %= 6;
console.log(num); // prints => 3

// 1g. Exponentiation Assignment //
// Exponentiates and assigns the value of the expression with the exponentiate equal(**=) sign. Same as num = num ** 3;
num **= 3;
console.log(num); // prints => 27

// Comparison Operator //
// Comparison operators compares two operands and returns a boolean value. Number, string, logical, and object values 
// can all be compared.   
// 2a. Equal Operator // 
// Compares a value to check if another value is loosely equal to each other.
let equal = 3 == '3'; 
console.log(equal); // prints => true; 

// 2b. Not Equal Operator // 
// Compares two operands to check if they are not equal to each other.
let notEqual = 3 != '3.5'; 
console.log(notEqual); // prints => true 

// 2c. 