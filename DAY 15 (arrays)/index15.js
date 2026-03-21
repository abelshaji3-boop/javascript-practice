// map() method in array

let array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]   // original array

let mappedArray = array1.map((eachnum) => {   // map() iterates through each element
    return eachnum * 3                         // multiply each number by 3
})

console.log(mappedArray)   // new array with multiplied values
console.log(array1)        // original array remains unchanged


// NOTES:

// 1. map() is an array method used to transform each element of an array.
// 2. It creates and returns a new array.
// 3. eachnum represents the current element.
// 4. Here each number is multiplied by 3.
// 5. The original array is not modified.