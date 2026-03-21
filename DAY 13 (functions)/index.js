// Arrow Function

// Syntax:
// variable = (parameters) => {
//     block of code
// }

const add = (num1, num2, num3, num4) => {   // arrow function declaration

    let result = num1 + num2 + num3 + num4; // calculate sum

    console.log(result)                     // print result

}

add(1,3,5,27)   // function calling


// NOTES:

// 1. Arrow function is a shorter way to write functions in JavaScript.
// 2. It uses => (arrow symbol) instead of the "function" keyword.
// 3. Parameters are written inside ().
// 4. The function body is written inside {}.
// 5. Arrow functions are commonly used in modern JavaScript (ES6).
// 6. Arrow functions are not hoisted like traditional functions.
// 7. They are often used for small and simple functions.