const students = [
  [1, "Anu", "BCA", 85, "Kochi"],
  [2, "Basil", "BCom", 78, "Kollam"],
  [3, "Chitra", "BCA", 92, "Kochi"],
  [4, "Dinesh", "BSc", 67, "Trivandrum"],
  [5, "Eva", "BCom", 88, "Kottayam"],
  [6, "Farhan", "BSc", 59, "Kochi"],
  [7, "George", "BCA", 73, "Trivandrum"],
  [8, "Haritha", "BCom", 81, "Kollam"],
  [9, "Irfan", "BSc", 90, "Kochi"],
  [10, "Jiya", "BCA", 95, "Kottayam"],
];

// Print students who scored above 80 

let scorearray = students.filter((eachstudent)=>eachstudent[3] > 80)
console.log(scorearray)

console.log("-------------------------");
// Print all students in BCA course - 

let bcaarray = students.filter((eachstudent)=>eachstudent[2]=="BCA")
console.log(bcaarray)

console.log("-------------------------");
// Print all students from Kochi - 

let kochiarray = students.filter((eachstudent)=>eachstudent[4]=="Kochi")
console.log(kochiarray)
console.log("-------------------------");
// Create a new array with only names and marks -
let newarray = students.map((eachstudent)=>[eachstudent[1],eachstudent[3]])
console.log(newarray)

console.log("-------------------------");
// Print total marks of all students -
let totalmark = students.reduce((acc,curr)=>acc+curr[3],0)
console.log(totalmark)

console.log("-------------------------");
// Print average mark of students
let average = students.reduce((acc,curr)=>acc+curr[3],0)
console.log(average/students.length)

//  Sort students by marks in descending order -
let sortedmark = students.sort((a,b)=>b[3]-a[3])
console.log(sortedmark)

console.log("-------------------------");

// Find the highest scoring student -
let highest = students.find((eachstudent)=>eachstudent[3]) 
console.log(highest)

console.log("-------------------------");
//  Print students who scored less than 70 -
let scorearray2 = students.filter((eachstudent)=>eachstudent[3] < 70)
console.log(scorearray2)
