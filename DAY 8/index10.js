//find factorial of a number 5 using for loop

let num = 52;      // the number for which we want to find factorial
let fact = 1;     // variable to store the factorial result

// for loop starts from 1 and runs until it reaches the number
for (let i = 1; i <= num; i++) {

  fact = fact * i;   // multiply current value of fact with i
                     // this keeps building the factorial value
}

// print the final factorial value
console.log("Factorial is:", fact);