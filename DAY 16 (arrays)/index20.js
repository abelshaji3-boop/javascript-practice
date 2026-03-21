//Find the smallest number.

let array1 = [3,65,87,22,500]

let largest = array1.reduce((acc,curr)=>acc<curr? acc:curr,)

console.log(largest)