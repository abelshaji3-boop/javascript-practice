// String methods

let word = "malayalam"     // string

let w = word.trim()        // removes extra spaces (if any)

console.log(word)          // original string
console.log(w)             // trimmed string


console.log(word.indexOf('y'))      // returns index of 'y'
console.log(word.startsWith('m'))   // checks if string starts with 'm'
console.log(word.endsWith('m'))     // checks if string ends with 'm'


// NOTES:

// 1. trim() → removes spaces from start and end of string.
// 2. indexOf() → returns position of character (first occurrence).
// 3. startsWith() → returns true if string starts with given value.
// 4. endsWith() → returns true if string ends with given value.