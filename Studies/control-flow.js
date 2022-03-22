/**
 * CONTROL FLOW:
 * 0. We can regulate the flow of our program using conditional statements. We can make decisions by asking true or false questions.
 * We determine which code runs if the question is true and which code runs if the question is false depending on the answer. 
 * 1. We use conditional statements like if-statements and their chains, if-elseif-else statements to accomplish this.
 * 2. Switch-statements can be used to control flow in the same way, but with cleaner code. The strict comparison (===) is used in 
 * the switch statement to compare the expression to the case values. 
 */

// 1. IF // 
// If a specified conditional statement results to truthy, the code block executes.
let age = 100 
if (age < 21) { // 100 < 21 => false 
    console.log('Too young to drink');
} 
// 2. ELSE-IF // 
// Multiple tests can be applied to chain onto the if statement until one condition returns truthy. 
else if(age <= 70) { // 100 <= 70 => false 
    console.log('of age to drink');
}
// 3. ELSE //
// Else statement is the default statement if all conditions return falsy. 
else { // default statement runs when all if statements in chain result to falsy. 
    console.log('consult doctor if safe to drink'); // prints => consult doctor if safe to drink
}

// 4. SWITCH // 
// The switch statement analyzes an expression, compares the result against case values, and then executes the statement that matches the case value. // 
let day = 6;
let dayName;

switch (day) { // swtich keyword, followed by expression inside paranthesis to test 
  case 1: // case clause to test if it matches expression value. Same as if(day === 1) 
    dayName = 'Sunday'; // if case clause matches, statement executes 
    break; // Must have a break statement to end the case. Absence of a break statement causes the next case to be executed, even when case has been met.   
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName); // prints => Friday