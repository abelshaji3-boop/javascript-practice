// flat() with Infinity (fully flatten array)

let array1 = [[1,[1],2,3],[1,2,3],[4,3,5]]   // nested array

let a1 = array1.flat(Infinity)   // flatten all levels of nesting

console.log(a1)                  // print fully flattened array


// NOTES:

// 1. flat() is used to remove nesting in arrays.
// 2. Infinity means remove ALL levels of nesting.
// 3. It converts a multi-dimensional array into a single-dimensional array.
// 4. It returns a new array (original array is not modified).