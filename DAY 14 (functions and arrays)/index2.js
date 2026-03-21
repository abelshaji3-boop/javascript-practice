// setInterval()

function print() {                 // function declaration
    console.log("hello world")     // prints message
}

setInterval(print, 5000)           // calls the function every 5000 ms (5 seconds)


// NOTES:

// 1. setInterval() is used to repeatedly execute a function after a fixed time interval.
// 2. 5000 means 5000 milliseconds = 5 seconds.
// 3. The function 'print' will run every 5 seconds.
// 4. setInterval is an asynchronous function in JavaScript.
// 5. It keeps repeating until it is stopped using clearInterval().