// Class and multiple objects

class Person {
    name = "abel"
    age = 23

    printop() {
        console.log(`hello, my name is ${this.name} and my age is ${this.age}`)
    }
}

// creating objects
let obj1 = new Person()
obj1.printop()

let obj2 = new Person()
obj2.printop()


// NOTES:

// 1. A class can be used to create multiple objects.
// 2. Each object is an instance of the class.
// 3. Both objects have same properties because values are fixed in class.
// 4. Methods can be accessed using object name.
// 5. 'this' refers to the current object.