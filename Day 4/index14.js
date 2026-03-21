//w.a.p check wheather 20 can be devide by 5 if...then print fizz and check if 20 can be devided by 3 then print buzz...if 3 and 5 are divisible by 20 print fizzbus

let num = 20
if(num%3==0){
    console.log("fizz")
}else if(num%5==0){
    console.log("buzz")
}else if(num%3==0 && num%5==0){
    console.log("fizzbuzz")
}