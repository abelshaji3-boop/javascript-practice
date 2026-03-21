//print sum of all numbers that are dividible by 6, from 200 to 400.

let num = 200
let limit = 400

let total = 0

while(num <= limit){
    if(num%6 === 0){
        total+=num
    }
    num++
}

console.log(total)