// try - catch

try {
    let x = y   // y is not defined → error
} catch (err) {
    console.log("error occurred")
}


// NOTES:

// 1. try block → contains code that may cause error.
// 2. catch block → handles the error.
// 3. Prevents program from crashing.
// 4. err contains error details.