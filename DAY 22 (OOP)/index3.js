// Rest parameter + multiple calls

function add(...args){
    let val = args.reduce((a,b)=>a+b)
    console.log(val)
}

// function calls
add(2,3,3,4,5)
add(1,2)
add(4,6,8)
add(8,10,10,9,10)


// NOTES:

// 1. ...args is called rest parameter.
// 2. It collects all arguments into an array.
// 3. reduce() is used to sum all elements.
// 4. Function can accept any number of arguments.
// 5. Same function works for different inputs.