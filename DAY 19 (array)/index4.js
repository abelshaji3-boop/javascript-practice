// Object add & delete properties

let obj = {
    uname : "abel",
    age : 23,
    ispassed : true,
    maths : 90,
    english : 80,
}

// dot notation
console.log(obj.uname)   

// bracket notation
console.log(obj["uname"])


// adding new property (case mismatch)
obj.uName = "qwertyu"    // new key created

console.log(obj)


// deleting property
delete obj.uName         // removes the key uName

console.log(obj)


// NOTES:

// 1. Objects store data as key-value pairs.
// 2. Keys are case-sensitive → uname ≠ uName.
// 3. obj.uName adds a new property.
// 4. delete keyword removes a property from object.
// 5. delete obj.key → removes that key-value pair.