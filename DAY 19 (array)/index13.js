// 1. Print total number of employees
console.log(employees.length)


// 2. Print names of all Developers
let developers = employees
  .filter((eachEmp)=>eachEmp.designation=="Developer")
  .map((eachEmp)=>eachEmp.empName)

console.log(developers)


// 3. Print salary of employee with empId 103
let details103 = employees.find((eachemp)=>eachemp.empId==103)
console.log(details103.salary)


// 4. Print all worklogs done in 'remote' mode
let flattenedWorklog = employees
  .map((eachEmp)=>eachEmp.worklog)
  .flat()

let remoteWorkd = flattenedWorklog.filter((eachWorklog)=>eachWorklog.mode =="remote")
console.log(remoteWorkd)


console.log("--------------------------------------------");


// 5. Print all worklogs where hours > 6
let worklogHours = flattenedWorklog.filter((eachWorklog)=>eachWorklog.hours > 6)
console.log(worklogHours)


console.log("--------------------------------------------");


// 6. Print all worklogs done on project 'E-Commerce'
let ecommerceProj = flattenedWorklog.filter((eachWorklog)=>eachWorklog.project=="E-Commerce")
console.log(ecommerceProj)


console.log("--------------------------------------------");


// 7. Print all tasks done by employee with empId 104
let empId104 = employees.find((eachEmp)=>eachEmp.empId==104)

empId104.worklog.forEach((eachLog)=>console.log(eachLog.task))


console.log("--------------------------------------------");


// 8. Print total working hours of employee with empId 104
let totalWorkingHours = empId104.worklog.reduce((acc,curr)=>acc+curr.hours,0)
console.log(totalWorkingHours)


console.log("--------------------------------------------");


// 9. Print employee who worked the most total hours
let mostWorked = employees.reduce((acc,curr)=>{
    let accHours = acc.worklog.reduce((a,c)=>a+c.hours,0)
    let currHours = curr.worklog.reduce((a,c)=>a+c.hours,0)

    return currHours > accHours ? curr : acc
})

console.log(mostWorked.empName)


console.log("--------------------------------------------");


// 10. Print employee with the highest salary
let highestEmp = employees.reduce((acc,curr)=>acc.salary > curr.salary ? acc : curr)

console.log(highestEmp.empName)


// NOTES:

// 1. Nested arrays need flattening using map + flat().
// 2. Always access correct keys (empId, hours, etc.).
// 3. forEach() is case-sensitive.
// 4. reduce() can be nested for calculations.
// 5. map() is used to extract specific values.