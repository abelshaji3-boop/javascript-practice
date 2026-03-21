const students = [
  ["Alice", [85, 90, 78]],
  ["Bob", [70, 88, 95]],
  ["Charlie", [60, 75, 85]],
  ["David", [92, 88, 96]],
  ["Eve", [55, 65, 50]],
];

//   You are given a nested array of student records, where each student’s record consists of their name (string) and an array of their scores (numbers). Your task is to perform the following operations using the discussed array methods:

//   1.each student’s name along with their average score.
students.forEach((eachstudent)=>{
    let avgscore =
    eachstudent[1].reduce((acc,curr)=> acc + curr,0) / eachstudent[1].length;
    console.log(`${eachstudent[0]}-${avgscore}`)
})

// create a new array of student names with their highest score in the format: ["Alice - 90", "Bob - 95", ...].
let highestscoreArray = students.map((eachstudent)=>{
    let highscore = eachstudent[1].reduce((acc,curr)=>acc>curr?acc:curr)
    return `${eachstudent[0]}-${highscore}`
})
console.log(highestscoreArray)

//  get an array of students who have an average score greater than 80.
    let filteredarray = students.filter((eachstudent)=>{
        let avgscore = eachstudent[1].reduce((acc,curr)=>acc+curr,)/eachstudent[1].
        length;
        return avgscore>80
    })
    console.log(filteredarray)
// get the first student who has a score below 60.
    let firststudent = students.find((eachStudent)=>{
        let score = eachStudent[1].reduce((acc,curr)=>acc<curr? acc:curr);
        return score<60
    })
    console.log(firststudent)
//  calculate the total sum of all students scores combined.

// check if any student has a perfect score of 100.
//  check if all students have at least one score above 50.