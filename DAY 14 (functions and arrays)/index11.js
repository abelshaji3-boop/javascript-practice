// Array Iteration using for loop

let days = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']  // array of days

let daylength = days.length   // get total number of elements in the array

for(let i = 0; i <= daylength - 1; i++){   // loop runs from index 0 to last index
    console.log(days[i])                   // print each element using index
}


// NOTES:

// 1. Arrays store multiple values in a single variable.
// 2. length property gives the number of elements in the array.
// 3. Array indexing starts from 0.
// 4. The for loop is used to iterate (go through) all elements of the array.
// 5. days[i] accesses each element using its index.