//input       2          3          4          5          6
//output     24        369       4936       61725         ?

let num = 6        // input number
let val = ""       // variable to build the number 123456

// loop runs from 1 up to num
for (let i = 1; i <= num; i++) {

    val += i       // add each number to the string
                   // example: "1" → "12" → "123" → ... → "123456"

}

// multiply the created number with the input number
console.log(val * num)


// NOTE:
// first we build the number 123456 using the loop
// then we multiply it with the input number

// Example:
// val = 123456
// num = 6
// 6 × 123456 = 740736