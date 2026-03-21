// flat() method in array

let array1 = [[1,[1],2,3],[1,2,3],[1,2,3]]   // nested array

let a1 = array1.flat(1)   // flatten the array by 1 level

console.log(a1)           // print flattened array


// NOTES:

// 1. flat() is used to convert a nested array into a single-level array.
// 2. The number inside flat(1) is called depth.
// 3. depth = 1 → removes one level of nesting.
// 4. If deeper nesting exists, increase the depth value (e.g., flat(2)).
// 5. It returns a new array and does not modify the original array.