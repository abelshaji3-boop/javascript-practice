// Private property in class

class Dummy {
    accNo = 1000
    name = "john"

    #balance = 70000   // private property

    printbalance() {
        console.log(this.#balance)   // accessible inside class
    }
}

let obj = new Dummy()

obj.printbalance()     // works

console.log(obj.balance)   // undefined (cannot access private)


// NOTES:

// 1. '#' is used to declare private properties.
// 2. Private properties are accessible only inside the class.
// 3. Cannot access using obj.#balance or obj.balance outside.
// 4. Helps in data hiding (encapsulation).