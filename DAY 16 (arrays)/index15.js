// find largest number using reduce()

let array1 = [3,65,87,22,500]   // original array

let largest = array1.reduce((acc, curr) => acc > curr ? acc : curr, 0)  
// acc → stores current largest value
// curr → current element
// acc > curr ? acc : curr → choose the bigger value

console.log(largest)   // print largest number


// NOTES:

// 1. reduce() is used to find a single result from an array.
// 2. acc keeps track of the largest value found so far.
// 3. curr is the current number being checked.
// 4. condition (acc > curr) → compares two numbers.
// 5. ternary operator returns the bigger number.
// 6. initial value is 0, so comparison starts from 0.