//let str ="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

// find the duplicating words in the string
// duplicate elements in an array

// find duplicate words (sir style)

let str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s"

let arr = str.toLowerCase().split(" ")   // convert to array

let output = {}    // store frequency
let output2 = {}   // store duplicates

arr.forEach((eachEl) => {

    if (eachEl in output) {
        output[eachEl] += 1
    } else {
        output[eachEl] = 1
    }

})

// filter duplicates
for (let key in output) {
    if (output[key] > 1) {
        output2[key] = output[key]
    }
}

console.log(output2)


// NOTES:

// 1. output → stores count of all words.
// 2. output2 → stores only duplicate words.
// 3. count > 1 → duplicate.
// 4. {} is used for objects (not ()).