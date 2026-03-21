//reverse numbers

let num =12345678
let reverse = ""

while(num>0){
    let lastdigit = num%10
    reverse = reverse + lastdigit
    num = Math.floor(num/10)
}
console.log(reverse)


