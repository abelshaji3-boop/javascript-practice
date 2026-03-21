//input       3          4          5          6
//output   36912      481216     5101520       ?

let num = 6;        // input number
let result = "";    // variable to store the output

for (let i = 1; i <= 4; i++) {   // loop runs 4 times
    result = result + (num * i); // add each multiple of the number
}

console.log(result);


// NOTE:
// This program prints the first 4 multiples of the given number.
// Example for input 6:
// 6×1 = 6
// 6×2 = 12
// 6×3 = 18
// 6×4 = 24
// Output → 6121824

