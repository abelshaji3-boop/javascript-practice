// factorial using recursion

// factorial logic:
// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1   ← base case

const fact = (num) => {

    // base condition (stopping condition for recursion)
    // when num becomes 1 the function stops calling itself
    if(num == 1){
        return 1
    }

    // recursive step
    // the function calls itself with a smaller number
    // example: fact(5) → 5 * fact(4)
    return num * fact(num - 1)

}

let result = fact(5)   // start recursion from 5
console.log(result)    // final result


// STEP-BY-STEP EXECUTION

// fact(5)
// → 5 * fact(4)

// fact(4)
// → 4 * fact(3)

// fact(3)
// → 3 * fact(2)

// fact(2)
// → 2 * fact(1)

// fact(1)
// → returns 1

// now values return back

// fact(2) = 2 * 1 = 2
// fact(3) = 3 * 2 = 6
// fact(4) = 4 * 6 = 24
// fact(5) = 5 * 24 = 120


// NOTE:
// recursion means a function calling itself
// base condition is required to stop infinite recursion