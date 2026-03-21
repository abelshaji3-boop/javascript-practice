//create a counter that prints from 1 to upwards every one second and stop execution when it reaches 10.

// Counter using setInterval that stops at 10

let count = 1;   // starting value

let intervalId = setInterval(() => {   // runs every 1 second

    console.log(count)                 // print current number

    if (count == 10) {                  // check if count reached 10
        clearInterval(intervalId)      // stop the interval
    }
    count++                             // increase number

}, 1000)


// NOTES:

// 1. setInterval() runs a function repeatedly after a fixed time.
// 2. 1000 milliseconds = 1 second.
// 3. clearInterval() stops the repeated execution.
// 4. intervalId stores the interval so we can stop it later.