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
//  //
let x = 0; 
while(x < 3) {
    x++;
    console.log(x); // prints => 
}

let y = 3;
while(y > 0) {
    y--;
    console.log(y); // prints => 
}

// 2. For // 
//  //
for(let i = 0; i < 3; i++) { // => New Orleans
    console.log(cities[i]);  // => Houston
}                            // => New York 

let reversed = [];
for(let i = cities.length - 1; i >= 0; i--) {
    reversed.push(cities[i]);
}
console.log(reversed); // prints => ['Memphis', 'Seattle', 'New York', 'Houston', 'New Orleans']

// 3. For-in // 
// // 
for(let key in myCar) {
    console.log(key);
    console.log(myCar.key);
}