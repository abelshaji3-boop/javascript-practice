//w.a.p to find the second largest number among 3

let num1 = 10;
let num2 = 25;
let num3 = 15;

if(num1 > num2 && num1 > num3){
    if (num2 > num3){
        console.log(num2 ,"is the largest");
    }else{
        console.log(num3,"is second largest")
    }
} else if (num3 > num1 && num3 > num2){
    if(num1 > num2){
        console.log(num1, "is second largest");
    }else{
        console.log(num2, "is the second largest");
    }
}else if(num2 > num1 && num2> num3){
    if(num1 > num3){
        console.log(num1, "is second largest")
    }else{
        console.log(num3, "is the second largest")
    }
}