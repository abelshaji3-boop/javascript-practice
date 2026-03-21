//check if a number is palindrome

let num = 12345678

let reverse = ""

while(num>0){
    let lastdigit = num%10
    reverse = reverse + lastdigit
    num = Math.floor(num / 10)
}
if (dupnum == reverse){
    console.log("palindrom")
}else{
    console.log("not a palndrom")
}