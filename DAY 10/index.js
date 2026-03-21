// * * * *
//* * * *
//* * * *
//* * * * 

// pattern using nested for loop

for(let row = 1; row <= 4; row++){   // outer loop → controls rows

    let rowStr = ""                  // stores stars for each row

    for(let col = 1; col <= 4; col++){   // inner loop → controls columns
        rowStr += "* "                   // add star to the row string
    }

    console.log(rowStr)   // print one row of stars
}


// NOTE:
// Nested loop means a loop inside another loop.

// outer loop → runs 4 times (creates 4 rows)
// inner loop → runs 4 times for each row (creates 4 stars)

// So total stars printed = 4 × 4

