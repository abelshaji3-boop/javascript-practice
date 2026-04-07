const employees = [
  {
    eid: 1,
    name: "Arun",
    department: "Developer",
    salary: 60000,
    experience: 2,
    rating: 4.2,
    projects: ["E-commerce", "Chat App"],
    isActive: true,
  },
  {
    eid: 2,
    name: "Meera",
    department: "HR",
    salary: 40000,
    experience: 3,
    rating: 4.5,
    projects: ["Hiring System"],
    isActive: true,
  },
  {
    eid: 3,
    name: "Rahul",
    department: "Developer",
    salary: 90000,
    experience: 5,
    rating: 4.8,
    projects: ["Banking App", "AI Tool"],
    isActive: false,
  },
  {
    eid: 4,
    name: "Sneha",
    department: "Tester",
    salary: 50000,
    experience: 4,
    rating: 4.3,
    projects: ["E-commerce"],
    isActive: true,
  },
  {
    eid: 5,
    name: "Vikram",
    department: "Developer",
    salary: 120000,
    experience: 6,
    rating: 4.9,
    projects: ["Cloud System", "AI Tool"],
    isActive: true,
  },
];


// ---------------- Level 1 ----------------

// 1. Print all employee names

employees.forEach((eachEmp)=>console.log(eachEmp.name))

// 2. Print all active employees

let activeemployee = employees.filter((eachEmp)=>eachEmp.isActive==true)
console.log(activeemployee)

// 3. Print all developers

let developers = employees.filter((eachEmp)=>eachEmp.department=="Developer")
console.log(developers)


console.log(`-------------------------------`);


// ---------------- Level 2 ----------------

// 4. Print names of employees with salary > 50000

let employeessal = employees.filter((eachEmp)=>eachEmp.salary > 50000)
console.log(employeessal)

// 5. Print employees with experience > 3 years

let employeesexp = employees.filter((eachEmp)=>eachEmp.experience > 3)
console.log(employeesexp)

// 6. Print names of employees working on "AI Tool"

let Aiemployees = employees.filter((eachEmp)=>eachEmp.projects == "AI Tool")
console.log(Aiemployees)


console.log(`-------------------------------`);


// ---------------- Level 3 ----------------

// 7. Sort employees by salary (high to low)

let salemployees = employees.sort((a,b)=>b['salary'] - a['salary'])
console.log(salemployees)

// 8. Find total salary of all employees

let totalsal = employees.reduce((acc,curr)=>acc+curr['salary'],0)
console.log(totalsal)

// 9. Find average experience

let average = employees.reduce((acc,curr)=>acc+curr['experience'],0)
let average1 = average/employees.length
console.log(average1)

console.log(`-------------------------------`);


// ---------------- Level 4 ----------------

// 10. Find highest paid employee

let highPaidEmp = employees.find((eachEmp)=>eachEmp.salary)
console.log(highPaidEmp)

// 11. Find lowest rated employee

let lowPaidEmp = employees.find((acc,curr)=>acc<curr ? acc:curr)
console.log(lowPaidEmp)

// 12. Group employees by department



console.log(`-------------------------------`);


// ---------------- Level 5 ----------------

// 13. Find total number of projects in company

// 14. Find employees working on more than 1 project

// 15. Check if any employee is inactive

// 16. Check if all employees have rating above 4


console.log(`-------------------------------`);


// ---------------- Level 6 ----------------

// 17. Increase salary by 10% for all employees

// 18. Find top 2 experienced employees

// 19. Remove inactive employees