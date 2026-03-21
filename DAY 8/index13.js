//print numbers until there sum becomes greater than 50

let i = 1;      // starting number
let sum = 0;    // variable to store the sum

do {
    console.log(i);   // print the current number
    sum = sum + i;    // add the number to sum
    i++;              // move to next number
} while (sum <= 50);  // stop when sum becomes greater than 50


// NOTE:
// numbers are printed one by one and added to sum.
// the loop continues until the sum becomes greater than 50.