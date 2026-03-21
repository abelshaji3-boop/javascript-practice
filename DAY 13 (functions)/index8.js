// Currying Function

const add = (a) => {          // first function takes argument 'a'

    return (b) => {           // second function takes argument 'b'

        return (c) => {       // third function takes argument 'c'

            return (d) => {   // fourth function takes argument 'd'

                console.log(a + b + c + d)   // final sum of all numbers

            }

        }

    }

}

// function calling
add(1)(2)(3)(4)


// NOTES:

// 1. Currying means converting a function with multiple parameters
//    into a sequence of functions each taking one parameter.

// 2. Instead of writing:
//    add(a,b,c,d)

//    we write:
//    add(a)(b)(c)(d)

// 3. Each function remembers the previous value using closure.

// 4. Final result is printed when the last function executes.