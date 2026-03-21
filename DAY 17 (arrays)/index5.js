// Rest Parameter 

function add(...args){          // ...args collects all arguments into an array

    let val = args.reduce((a, b) => a + b)   // sum all elements using reduce()

    console.log(val)          // print result
}

add(2,3,3,4,5)   // function call


// NOTES:

// 1. ...args is called rest parameter.
//