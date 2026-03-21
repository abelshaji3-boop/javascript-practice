 //        *
 //      *   *
 //    *       *
 //  *           *
 // * * * * * * * *

 for (let row = 1; row <= 5; row++) {

    let rowStr = "// "

    for (let col = 1; col <= 9; col++) {

        if (row == 5 || col == (6 - row) || col == (4 + row)) {
            rowStr += "* "
        } else {
            rowStr += "  "
        }

    }

    console.log(rowStr)
}


// NOTE
// row 5 → bottom line full of *
// (6-row) → left diagonal
// (4+row) → right diagonal