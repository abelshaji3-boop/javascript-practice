// for...in loop (Array Index Iteration)

let array1 = [1,2,3,4,5,6,7,8,9,10]   // array containing numbers

for (let index in array1){            // for...in loop iterates through indexes
    console.log(index)                // print index (position) of elements
}


// NOTES:

// 1. for...in loop is used to iterate over the indexes (keys) of an array or object.
// 2. 'index' represents the position of each element.
// 3. Array index starts from 0.
// 4. This loop prints the index, not the actual value.
// 5. To print values we can use: array1[index].