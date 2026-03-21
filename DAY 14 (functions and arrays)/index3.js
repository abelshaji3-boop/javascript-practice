//create a counter that prints from 1 to upwards every one second

// Counter using setInterval

let count = 1;   // starting number

setInterval(() => {        // function runs every 1 second
    console.log(count)     // print current count
    count++                // increase count by 1
}, 1000)


// NOTES:

// 1. setInterval() runs a function repeatedly after a fixed time.
// 2. 1000 means 1000 milliseconds = 1 second.
// 3. count++ increases the number each time.
// 4. This creates a counter that prints numbers upward every second.