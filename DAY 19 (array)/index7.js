// Count frequency of words

let sentence = "hello hai hello hai world"

let arr = sentence.split(" ")   // convert sentence to array

let output = {}                 // empty object

arr.forEach((eachEl) => {       // iterate each word

    if (eachEl in output) {     // check if word already exists
        output[eachEl] += 1     // increase count
    } else {
        output[eachEl] = 1      // add new word with count 1
    }

})

console.log(output)


// NOTES:

// 1. split(" ") → converts sentence into words.
// 2. Object is used to store word frequency.
// 3. 'in' operator checks if key exists.
// 4. If exists → increment count.
// 5. Else → initialize with 1.