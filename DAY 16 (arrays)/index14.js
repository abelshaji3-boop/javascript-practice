// reduce() method with initial value

let array1 = [3,65,87,22,500]   // original array

let sum = array1.reduce((acc, curr) => acc + curr, 0)  
// acc → accumulator starts from 0 (initial value)
// curr → current element
// acc + curr → adds each element step by step

console.log(sum)   // print final sum


// NOTES:

// 1. reduce() reduces the array to a single value.
// 2. 0 is the initial value of the accumulator (acc).
// 3. First step: acc = 0, curr = 3 → 0 + 3 = 3
// 4. Then continues adding all elements.
// 5. Using initial value makes the behavior predictable and safe.