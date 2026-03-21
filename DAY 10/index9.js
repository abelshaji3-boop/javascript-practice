// pattern:
// *
// * *
// * * *
// * * * *

for(let row = 1; row <= 4; row++){   // outer loop → controls rows

    let rowStr = ""                  // stores stars for one row

    for(let col = 1; col <= row; col++){   // inner loop → stars increase with row
        rowStr += "* "                    // add star and space
    }

    console.log(rowStr)   // print the completed row
}


// NOTE:
// outer loop → number of rows
// inner loop → prints stars equal to the row number
// row 1 → 1 star
// row 2 → 2 stars
// row 3 → 3 stars
// row 4 → 4 stars