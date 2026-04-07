// Replace words in array using splice()

let word = "I love javascript"

let arr = word.split(' ')   // convert string to array

arr.splice(0, 2, "I", "Hate")   // remove first 2 words and add new ones

console.log(arr)


// NOTES:

// 1. split(' ') → converts string into array of words.
// 2. splice(start, deleteCount, new values)
//    - modifies original array
// 3. Here:
//    start = 0
//    delete 2 words ("I", "love")
//    add "I", "Hate"