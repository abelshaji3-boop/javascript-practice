// w.a.f that accept a number n, which prints prime number from 1 to n

// w.a.f that accept a number n, which prints prime number from 1 to n

function printprime(n){

for(let num = 2; num <= n; num++){   // check numbers from 2 to n

    let isprime = true               // assume number is prime

    for(let i = 2; i < num; i++){    // check divisibility

        if(num % i == 0){            // if divisible
            isprime = false          // not a prime number
            break
        }

    }

    if(isprime){                     // if still true → prime
        console.log(num)
    }

}

}

printprime(20)


// NOTE:
// outer loop → numbers from 2 to n
// inner loop → checks if number divisible
// if not divisible → prime number
