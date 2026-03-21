// arrow function to check if a person is adult

const isAdult = (age) => {      // arrow function with parameter age

    return age >= 18            // returns true if age is 18 or more, otherwise false

}

console.log(isAdult(20))        // true
console.log(isAdult(15))        // false


// NOTES:
// arrow function uses => instead of function keyword
// age >= 18 is a condition that returns true or false
// return sends the result back when the function is called