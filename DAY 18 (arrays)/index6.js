// slice() vs substring()

let word = "malayalam"

let w12 = word.slice(0, -2)       // slice supports negative index
let w13 = word.substring(0, -2)   // substring does NOT support negative index

console.log(word)
console.log(w12)
console.log(w13)


// NOTES:

// 1. slice(start, end)
//    - supports negative values
//    - negative means count from end
//    - here (0, -2) → removes last 2 characters

// 2. substring(start, end)
//    - does NOT support negative values
//    - negative values are treated as 0
//    - so (0, -2) becomes (0, 0)

// 3. slice() → flexible
//    substring() → safer but limited