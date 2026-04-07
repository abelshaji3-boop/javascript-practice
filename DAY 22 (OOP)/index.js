// Inheritance (Parent → Child)

class Parent {
    name = "KTM"
    variant = "DUKE 250"
}

// child class inherits from parent
class Child extends Parent {

}

// create object of child
let obj2 = new Child()

console.log(obj2.name)


// NOTES:

// 1. Inheritance allows one class to use properties of another class.
// 2. 'extends' keyword is used for inheritance.
// 3. Child class can access parent properties and methods.
// 4. No need to redefine properties in child.
// 5. Here Child inherits name and variant from Parent.