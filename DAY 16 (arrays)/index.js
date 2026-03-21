// toSorted() method in array (ascending order)

let array1 = [21,65,89,65,443,33,76,99]   // original array

let sortedArray = array1.toSorted((a, b) => a - b)  
// toSorted() returns a new sorted array (ascending order)

console.log(sortedArray)   // sorted array
console.log(array1)        // original array remains unchanged


// NOTES:

// 1. toSorted() is a modern array method.
// 2. It returns a new sorted array without changing the original array.
// 3. a - b → ascending order.
// 4. b - a → descending order.
// 5. Unlike sort(), it does NOT modify the original array.