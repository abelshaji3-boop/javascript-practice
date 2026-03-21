// Recursive Function

const print = () => {

    console.log("hello")   // prints hello

    print()                // function calls itself (recursion)

}

print()                    // initial function call


// NOTES:

// 1. A recursive function is a function that calls itself.
// 2. Recursion repeats the function again and again.
// 3. Usually recursion must have a stopping condition (base case).
// 4. In this example there is no stopping condition,
