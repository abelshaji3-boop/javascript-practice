//Task-
//digital clock
//output - 14:14:18(real time)
//create a function to get real time, print that current time.
//call the function in each second - setinterval


// Digital Clock using function + setInterval

function showTime(){                    // function to get and print real time

    let now = new Date()                // get current date and time

    let hours = now.getHours()          // extract hours
    let minutes = now.getMinutes()      // extract minutes
    let seconds = now.getSeconds()      // extract seconds

    console.log(hours + ":" + minutes + ":" + seconds)  // print time

}

setInterval(showTime, 1000)             // call the function every 1 second


// NOTES:

// 1. new Date() gets the current system time.
// 2. getHours(), getMinutes(), getSeconds() extract time parts.
// 3. showTime() prints the current time.
// 4. setInterval() calls the function every 1000 ms (1 second).
// 5. This creates a real-time digital clock.