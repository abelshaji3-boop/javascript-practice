// Class and Object

class Person {
    name = "abel"
    age = 23

    printop() {
        console.log(`hello, my name is ${this.name} and my age is ${this.age}`)
    }
}

// creating object
let obj1 = new Person()

// calling method
obj1.printop()


// NOTES:

// 1. class is a blueprint to create objects.
// 2. object is an instance of a class.
// 3. 'this' refers to current object.
// 4. methods are functions inside a class.
// 5. new keyword is used to create object.