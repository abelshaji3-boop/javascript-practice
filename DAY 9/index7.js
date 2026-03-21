// w.a.p to print all prime numbers from 1 to 100

// w.a.p to print all prime numbers from 1 to 100

for (let num = 2; num <= 100; num++) {   // check numbers from 2 to 100

    let isPrime = true;                  // assume number is prime

    for (let i = 2; i < num; i++) {      // check divisibility

        if (num % i == 0) {              // if divisible by any number
            isPrime = false              // then it is not prime
            break
        }

    }

    if (isPrime) {                       // if still prime
        console.log(num)                 // print the number
    }

}


// NOTE:
// outer loop → goes from 2 to 100
// inner loop → checks if the number is divisible by any number
// if not divisible → it is a prime number