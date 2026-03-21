//Try to find How to reverse a number using while loop

let num = 1234
let reverse = 0

while (num > 0){
    let digit = num % 10; //get last digit
    reverse = reverse*10 + digit; //build reversed number
    num = Math.floor(num / 10); //remove last digit
}
console.log(reverse)