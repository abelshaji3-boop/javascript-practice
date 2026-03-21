// w.a.p to check if a digit is present in a given number

let num = 56789        // given number
let searchkey = 7      // digit we want to search
let isfound = false    // flag variable (assume digit not found)

while (num > 0) {

    let lastdigit = num % 10   // extract the last digit

    if (lastdigit == searchkey) {  // check if digit matches
        isfound = true             // digit found
        break                      // stop the loop
    }

    num = Math.floor(num / 10)     // remove the last digit
}

// print result based on flag value
if (isfound) {
    console.log("digit is present")
} else {
    console.log("digit is not present")
}


// NOTE:
// %10 → gets the last digit of the number
// Math.floor(num/10) → removes the last digit
// flag variable helps to track whether the digit is found or not