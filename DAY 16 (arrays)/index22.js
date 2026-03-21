// empID,empName,EmpDesignation,EmpLocation,empSalary,empExperience

const employees = [
  [1000, "John Mathew", "Developer", "Kochi", 600000, 2],
  [1001, "Rahul Das", "QA Tester", "Kochi", 500000, 2],
  [1002, "Sneha Raj", "Automation Tester", "Tvm", 550000, 3],
  [1003, "Arjun ks", "Data Engineer", "Kochi", 85000, 5],
  [1004, "Alan George", "Developer", "Kochi", 80000, 4],
  [1005, "Maya Thomas", "Developer", "Tvm", 75000, 3],
  [1006, "Abdulla ks", "DevOps Engineer", "Tvm", 80000, 4],
  [1007, "Vivek pp", "Cloud Architect", "Kochi", 95000, 6],
  [1008, "Sophia James", "Developer", "Tvm", 70000, 3],
  [1009, "Riya Paul", "System Analyst", "Tvm", 70000, 3],
];

// 1. print all employee name
employees.forEach((eachemp)=>console.log(eachemp[1]))

console.log(`-----------------------------`);

// 2. print total number of employee
console.log(employees.length)

console.log(`-----------------------------`);

// 3. print developer employee details - filter
let developerArray = employees.filter((eachemp)=>eachemp[2] == "Developer")
console.log(developerArray)

console.log(`-----------------------------`);

// 4. print employees whose salary > 75000 - filter
let salaryArray = employees.filter((eachemp)=>eachemp[4] > 75000)
console.log(salaryArray)

console.log(`-----------------------------`);

// 5. print details of employee Vivek pp - find
let vivek = employees.find((eachemp)=>eachemp[1] == "Vivek pp")
console.log(vivek)

console.log(`-----------------------------`);

// 6. Sort employee based on their salary in descending order - sort
let sortedSalary = employees.sort((a,b)=>b[4]-a[4])
console.log(sortedSalary)

console.log(`-----------------------------`);

// 7. Sort employee based on their experience in ascending order - sort
let sortedExp = employees.sort((a,b)=>a[5]-b[5])
console.log(sortedExp)

console.log(`-----------------------------`);

// 8. print total salary of all employees - reduce
let totalsal = employees.reduce((acc,curr)=>acc+curr[4],0)
console.log(totalsal)


// NOTE:
// index positions → [1]=name, [2]=designation, [4]=salary, [5]=experience