// Object access (dot & bracket notation)

let obj = {
    uname : "abel",
    age : 23,
    ispassed : true,
    maths : 90,
    english : 80,
}

// dot notation
console.log(obj.uname)   // access using property name


// bracket notation
console.log(obj["uname"])   // access using key as string


// NOTES:

// 1. Objects store data in key-value pairs.
// 2. Dot notation → obj.key
// 3. Bracket notation → obj["key"]
// 4. Key name must match exactly (case-sensitive).
// 5. 'uName' ≠ 'uname'