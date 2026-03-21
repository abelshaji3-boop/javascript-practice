// find smallest number using reduce()

let array1 = [3,65,87,22,500]   // original array

let smallest = array1.reduce((acc, curr) => acc < curr ? acc : curr)  
// acc → stores current smallest value
// curr → current element
// acc < curr ? acc : curr → choose the smaller value

console.log(smallest)   // print smallest number


// NOTES:

// 1. reduce() compares all elements to find a single result.
// 2. acc starts from the first element (since no initial value is given).
// 3. curr is the next element in the array.
// 4. condition (acc < curr) → checks which is smaller.
// 5. ternary operator returns the smaller number.