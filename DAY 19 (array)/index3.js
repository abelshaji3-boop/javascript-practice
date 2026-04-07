// Object update using dot & bracket notation

let obj = {
    uname : "abel",
    age : 23,
    ispassed : true,
    maths : 90,
    english : 80,
}

// dot notation
console.log(obj.uname)    // "abel"

// bracket notation
console.log(obj["uname"]) // "abel"


// updating value (WRONG key)
obj.uName = "qwertyu"     // creates NEW key (case mismatch)

console.log(obj)


// NOTES:

// 1. Object keys are case-sensitive.
// 2. uname ≠ uName (different keys).
// 3. obj.uName = "qwertyu" → adds a new property, does NOT update old one.
// 4. To update correctly use:

// obj.uname = "qwertyu"