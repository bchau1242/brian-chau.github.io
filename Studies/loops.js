/**
 * LOOPS:
 * 0. If you want to run the same code a particular number of times, each time with a different value. 
 * 1. While loops and for loops are be used for arrays. 
 * 2. for-in loops are used for objects.
 * 3. Be sure to increment or decrement in the code block, or the loop will run infinitely and crash the program.  
 */

let cities = ['New Orleans', 'Houston', 'New York', 'Seattle', 'Memphis'];

let myCar = {
    make: 'Toyota',
    model: 'Tacoma',
    year: 2018,
    trim: 'offroad',
    mileage: 35000,
    color: 'Magnetic Gray'
}

// 1. While // 
// We start off a while loop with the while keyword, a condition in paranthesis to know when to stop the loop, 
// make sure to increment or decrement in the code block. 
let x = 0; 
while(x < 3) {
    x++;
    console.log(x); // prints => 1
}                   //           2
                    //           3
let y = 3;
while(y > 0) {
    y--;
    console.log(y); // prints => 2
}                   //           1
                    //           0
// 2. For // 
// Commonly used to iterate over arrays or strings indexes. We start with the for keyword. Inside the paranthesis, we put 3 expressions. 
// The first initializes a variable i(being the index) as a starting point to iterate, the second is a condition as an ending point, and lastly we increment 
// or decrement to make sure the loop stops at some point. 

for(let i = 0; i < 3; i++) { // => New Orleans
    console.log(cities[i]);  // => Houston
}                            // => New York 

let reversed = [];
for(let i = cities.length - 1; i >= 0; i--) {
    reversed.push(cities[i]);
}
console.log(reversed); // prints => ['Memphis', 'Seattle', 'New York', 'Houston', 'New Orleans']

// 3. For-in // 
// Commonly used to iterate over objects, accessing its properties and property values. Start with the for keyword. Inside the paranthesis, 
// let or var keyword to initialize a variable, followed by 'in' and the object name that you'd like to iterate over. Last is curly brackets to run a code block.  
for(let key in myCar) {
    console.log(key);
    console.log(myCar[key]);
} 

// Result //
// make
// Toyota
// model
// Tacoma
// year
// 2018
// trim
// offroad
// mileage
// 35000
// color
// Magnetic Gray