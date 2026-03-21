//check if a given 3 digit number is amstrong or not

let num = 153        // the number we want to check
let dupnum = num     // store the original number for comparison
let result = 0       // variable to store the sum of cubes of digits

while(num > 0){      // loop runs until the number becomes 0
    let lastdigit = num % 10        // extract the last digit of the number
    result = result + (lastdigit**3) // cube the digit and add it to result
    num = Math.floor(num / 10)      // remove the last digit from the number
}

if (result === dupnum) {   // compare calculated result with original number
  console.log(dupnum + " is an Armstrong number");
} else {
  console.log(dupnum + " is not an Armstrong number");
}