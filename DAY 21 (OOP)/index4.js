// Class with multiple methods (Student example)

class Student {
    name = "abel"
    phy = 85
    chem = 60
    bio = 70
    maths = 75
    computer = 80 

    printname() {
        console.log("my name is", this.name)
    }

    printtotal() {
        let total = this.phy + this.chem + this.bio + this.maths + this.computer
        console.log(total)
    }

    printavg() {
        let total = this.phy + this.chem + this.bio + this.maths + this.computer
        console.log(total / 5)
    }
}

// create object
let s1 = new Student()

// method calls
s1.printname()
s1.printtotal()
s1.printavg()


// NOTES:

// 1. Class contains properties (marks) and methods (functions).
// 2. 'this' is used to access current object values.
// 3. Methods can perform calculations (total