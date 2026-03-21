// some() method in array

let array1 = [3,63,37,19,2]   // original array

let boolval = array1.some((eachnum) => eachnum % 2 == 0)  
// some() checks if at least one element satisfies the condition
// eachnum % 2 == 0 → checks for even number

console.log(boolval)   // prints true or false


// NOTES:

// 1. some() is an array method.
// 2. It returns true if ANY one element satisfies the condition.
// 3. It returns false if no elements satisfy the condition.
// 4. Here it checks if there is at least one even number.
// 5. In this array, 2 is even → so output is true.