// find() method in array

let array1 = [1,2,3,4,5,6,7,8,9,10]   // original array

let result = array1.find((eachnum) => eachnum % 2 == 0)  
// find() checks each element and returns the first value that satisfies the condition

console.log(result)


// NOTES:

// 1. find() is an array method.
// 2. It returns the first element that satisfies the condition.
// 3. Here the condition is eachnum % 2 == 0 (even number).
// 4. The first even number in the array is returned.