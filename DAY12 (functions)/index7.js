// w.a.f to find the smallest among 5 numbers

function smallest(num1, num2, num3, num4, num5){

    if(num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5){
        console.log(num1 + " is the smallest")   // check if num1 is smallest
    }

    else if(num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5){
        console.log(num2 + " is the smallest")   // check if num2 is smallest
    }

    else if(num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5){
        console.log(num3 + " is the smallest")   // check if num3 is smallest
    }

    else if(num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5){
        console.log(num4 + " is the smallest")   // check if num4 is smallest
    }

    else{
        console.log(num5 + " is the smallest")   // if none above → num5 is smallest
    }

}

// function calling
smallest(5,2,8,1,7)


// NOTE:
// each condition checks if one number is smaller than all others
// && means all conditions must be true