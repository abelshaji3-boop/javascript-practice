//w.a.f to find a number is happy number or not

function happynumber(num){

    let ishappy = false        // assume number is not happy

    for(let i = 1; i < 20; i++){   // repeat the process multiple times

        let sum = 0                // reset sum each iteration
        let temp = num             // keep a copy of the number

        while(temp > 0){           // extract digits
            let lastdigit = temp % 10
            sum = sum + lastdigit**2   // add square of digit
            temp = Math.floor(temp / 10)
        }

        if(sum == 1){              // if result becomes 1 → happy number
            ishappy = true
            break
        }

        num = sum                  // continue process with new number
    }

    ishappy ? console.log("happy number") : console.log("not a happy number")

}

happynumber(19)


// NOTE:
// repeatedly replace the number with sum of squares of its digits
// if the result becomes 1 → happy number
// otherwise it keeps looping → not a happy number