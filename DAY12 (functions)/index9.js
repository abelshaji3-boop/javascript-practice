// w.a.f to calculate bill with 12% discount if amount > 1000

function calculateBill(amount){   // parameter: total bill amount

    if(amount > 1000){            // check if amount is greater than 1000

        let discount = amount * 0.12   // calculate 12% discount
        let finalBill = amount - discount   // subtract discount from amount

        console.log("Final bill after discount:", finalBill)

    }else{

        console.log("Final bill:", amount)  // no discount applied

    }

}

// function calling
calculateBill(1500)


// NOTE:
// if amount > 1000 → apply 12% discount
// discount = amount × 12 / 100
// final bill = amount − discount