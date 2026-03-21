// Callback Function

const printhello = () => {
    console.log("hello")      // function that prints hello
}

const mainfn = (cb) => {     // cb is a parameter (callback function)
    cb()                     // calling the callback function
}

mainfn(printhello)           // passing printhello as a callback


// NOTES:

// 1. A callback function is a function passed as an argument to another function.
// 2. The main function receives the callback and executes it.
// 3. Here 'printhello' is the callback function.
// 4. 'mainfn' receives the callback as 'cb' and runs it using cb().
// 5. Callback functions are commonly used in asynchronous programming.