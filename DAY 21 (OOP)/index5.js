class emp{
    constructor(name,age,salary,jobrole){
        this.name = name,
        this.age = age
        this.salary = salary
        this.jobrole = jobrole
    }
    printdetails(){
        console.log(this.name, this.salary)
    }
}

const emp1 = new emp("sarath", 56, 60000, "R&D engineering")
emp1.printdetails()
const emp2 = new emp("Athul", 26, 30000, "R&D engineering")
emp1.printdetails()