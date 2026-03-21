// filter() method in array

let array1 = [1,2,3,4,5,6,7,8,9,10]   // original array

let filteredArray = array1.filter((eachnum) => eachnum % 2 == 0) 
// filter() checks each element
// eachnum % 2 == 0 → condition to select even numbers

console.log(filteredArray)   // prints new array with only even numbers


// NOTES:

// 1. filter() is an array method used to create a new array based on a condition.
// 2. It checks each element of the array.
// 3. If the condition is true, the element is included in the new array.
// 4. The original array does not change.
// 5. Here it filters even numbers using eachnum % 2 == 0.