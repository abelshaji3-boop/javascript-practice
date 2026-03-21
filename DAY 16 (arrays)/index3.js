// every() method in array

let array1 = [3,63,37,19,2]   // original array

let boolval = array1.every((eachnum) => eachnum % 2 == 0)  
// every() checks if ALL elements satisfy the condition
// eachnum % 2 == 0 → checks for even numbers

console.log(boolval)   // prints true or false


// NOTES:

// 1. every() is an array method.
// 2. It returns true only if ALL elements satisfy the condition.
// 3. It returns false if even one element fails the condition.
// 4. Here not all numbers are even → so output is false.