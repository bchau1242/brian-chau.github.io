/**\
 * STRING MANIPULATION:  
 * 0. Strings are zero indexed, meaning the first character starts at an index of 0 and so on.   
 * 1. When a string is initialized, it becomes a string object instance, which means it has 
 * access to a wide variety of built-in properties and methods. 
 * String properties and methods allow us to manipulate strings.  
 */

// 1. Concatenate //
// We can use string operators like + , += or the concatenate method to combine strings. 
let combine = 'Combine this ' + 'with that';
let ending = 'to get a full sentence.';
console.log(combine); // prints => Combine this with that
console.log(combine.concat(', ', ending)); // prints => Combine this with that, to get a full sentence. 

let str1 = 'Hello';
let str2 = ' world';
console.log(str1 += str2); // prints => Hello world  

// 2. Length // 
// The length property returns the number of characters within the given string.  
let howLong = 'characters';
console.log(howLong.length); // prints => 10

// 3. Character Access //
// We can access a specific character in a string using charAt() method or by using bracket notation and an index.
// .charAt(3) will return the character at the index of 3. 
// To quickly access the last character in a string, we can use the length property which gives us the amount of characters in the string.
// but because the index of the string starts at 0, we must subract 1 from the result of using the length property. 
let fullName = 'Brian Chau'; 
console.log(fullName.charAt(3)); // prints => a 

console.log(fullName[fullName.length - 1]); // prints => u

// 4. Includes // 
// Tests if a substring exists within a string. Returns a boolean value. 
let str3 = 'pomeranian'; 
console.log(str3.includes('ran')); // prints => true 

// 5. Slice // 
// The slice() method can be used to extract a substring from a string.
// You must specify the index at which to begin extracting and the index at which to stop extracting when using the slice() method. 
let animal = 'elephant'; 
console.log(animal.slice(3, -1)); // prints => phan 

// 6. Changing Case // 
// To convert all characters in a string to lowercase or uppercase, use the string methods toLowerCase() and toUpperCase().
let random = 'ThiS iS a raNdoM sTRinG';
console.log(random.toUpperCase()); // prints => THIS IS A RANDOM STRING
console.log(random.toLowerCase()); // prints => this is a random string 

// 7. Replace // 
// The replace() method looks for a value or a regular expression in a string and creates a new string with 
// the replaced values. The original string is not changed by the replace() method.
// To use the replace method, start with the string.replace(searchValue or substr, replacement or newSubstr)
let sentence = 'The man mowed the lawn'; 
console.log(sentence.replace('man', 'boy')); // prints => The boy mowed the lawn

// 8. Trim //
// The trim() method removes whitespace around a string. 
let nflTeam = '      Saints           ';
console.log(nflTeam); // prints =>       Saints           
console.log(nflTeam.trim()); // prints => Saints 
