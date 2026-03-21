//w.a.p to check if a number is a prime number

let num = 8          // number to check
let flag = true      // assume the number is prime

// loop from 2 to num-1 to check divisibility
for(let i = 2; i <= num - 1; i++){

    if(num % i == 0){     // if num is divisible by i
        flag = false      // then it is not a prime number
        break;            // stop the loop
    }

}

// check the flag value and print result
flag == true ? console.log("prime number") : console.log("not a prime number")


// NOTE:
// prime number → a number that has only 2 factors (1 and itself)
// if num is divisible by any number between 2 and num-1,
// then it is not a prime number