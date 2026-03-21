//Timeout method

console.log("first")   // this runs first (synchronous code)

setTimeout(() => {     // setTimeout schedules a function to run after some time

    console.log("ugfcb")   // this runs after 1000 milliseconds (1 second)

}, 1000)

console.log("third")   // this runs immediately after "first"


// NOTES:

// 1. setTimeout() is an asynchronous function in JavaScript.
// 2. It delays the execution of a function by a specified time.
// 3. 1000 means 1000 milliseconds (1 second).
// 4. JavaScript does not wait for setTimeout to finish.
// 5. So "third" prints before "ugfcb".