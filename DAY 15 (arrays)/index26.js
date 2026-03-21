// sort() method in array (descending order)

let array1 = [5,65,33,9,10,52,45,66,78]   // original array

let sortedArray = array1.sort((a, b) => b - a)  
// sort() compares two numbers
// b - a → sorts numbers in descending order (largest to smallest)

console.log(sortedArray)   // print sorted array


// NOTES:

// 1. sort() is an array method used to arrange elements.
// 2. (a, b) are two elements being compared.
// 3. b - a → descending order.
// 4. a - b → ascending order.
// 5. sort() modifies the original array.