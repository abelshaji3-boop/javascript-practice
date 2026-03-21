// w.a. curried function to calculate bill after discount

const bill = (amount) => {                 // first function takes bill amount

    return (discount) => {                 // second function takes discount %

        let discountAmount = amount * discount / 100   // calculate discount value

        let finalBill = amount - discountAmount        // subtract discount from amount

        console.log("Final bill:", finalBill)           // print final bill

    }

}

// function calling
bill(1500)(12)   // amount = 1500, discount = 12%


// NOTES:

// 1. This is a curried function.
// 2. First function receives the bill amount.
// 3. Second function receives the discount percentage.
// 4. Discount is calculated using: amount * discount / 100.
// 5. Final bill = amount − discount amount.