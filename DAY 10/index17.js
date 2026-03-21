// pattern:
// *
// * *
// *   *
// *     *
// * * * * *

for (let row = 1; row <= 5; row++) {   // outer loop → rows

    let rowStr = ""                    // store pattern for each row

    for (let col = 1; col <= 5; col++) {   // inner loop → columns

        if (col == 1 || col == row || row == 5) {   // first column, diagonal, or last row
            rowStr += "* "
        } else {
            rowStr += "  "              // spaces between stars
        }

    }

    console.log(rowStr)   // print the row
}


// NOTE:
// col == 1 → left vertical line
// col == row → diagonal star
// row == 5 → last row full of stars