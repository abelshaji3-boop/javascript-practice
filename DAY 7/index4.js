//print all the odd numbers from 500 to 700 and skip all the numbers that are divisible by 5, using while loop.

let num = 500
let limit = 700

while(num<=limit){
    if(num%2!=0 && num%5!=0){
        console.log(num)
    }
    num++
}