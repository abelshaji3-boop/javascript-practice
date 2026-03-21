// Spread Operator (Array Merging)

let a1 = [1,2,3,4,5,56]     // first array

let a2 = [3,4,5,6,7,3,6,10] // second array

let a3 = [...a1, ...a2]     // spread operator merges both arrays

console.log(a3)             // print merged array


// NOTES:

// 1. ... is called the spread operator.
// 2. It expands elements of an array.
// 3. [...a1, ...a2] merges two arrays into one.
// 4. Original arrays are not modified.
// 5. Useful for copying and combining arrays.