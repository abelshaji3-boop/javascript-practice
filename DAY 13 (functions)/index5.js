// Return Keyword

const add = (num1, num2) => {        // arrow function with two parameters

    let result = num1 + num2         // calculate sum

    return result;                   // return the value to the caller

}

let result = add(3,4)                // function call, returned value stored in variable

console.log(result)                  // print the returned result


// NOTES:

// 1. return keyword sends a value from the function back to where it was called.
// 2. When return executes, the function stops running.
// 3. The returned value can be stored in a variable.
// 4. Here add(3,4) returns 7, which is stored in 'result'.