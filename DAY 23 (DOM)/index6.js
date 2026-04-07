// try - catch - finally

try {
    let num = 10
    num()   // TypeError
} catch (err) {
    console.log("error handled")
} finally {
    console.log("this will always execute")
}


// NOTES:

// 1. finally block always executes.
// 2. Runs whether error occurs or not.
// 3. Used for cleanup operations.
// 4. try → risky code, catch → error handling, finally → always runs.