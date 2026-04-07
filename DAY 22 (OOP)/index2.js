// Prototype Inheritance

let obj1 = {
    name :"sarath",
    age : 50,
    department:"Full stack"
}

let obj2 = {
    name: "alakhanandha",
    age : 51
}

// linking prototype
obj2.__proto__ = obj1

console.log(obj2.department)


// NOTES:

// 1. __proto__ is used to set prototype of an object.
// 2. obj2 can access properties of obj1 through prototype.
// 3. This is called prototype inheritance.
// 4. If property not found in obj2, JS looks into obj1.
// 5. This is called prototype chain.