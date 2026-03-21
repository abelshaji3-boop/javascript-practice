//* * * * #
//* * * #  #
//* * #  #   #
//* #  #  #   #

for (let row = 1; row <= 4; row++) {   // outer loop → rows

    let rowstr = ""                    // store pattern for each row

    for (let col = 1; col <= 5; col++) {   // inner loop → 5 columns

        if (col <= (5 - row)) {            // first part → stars
            rowstr += "* "
        } else {                           // remaining part → #
            rowstr += "#  "
        }

    }

    console.log(rowstr)   // print the row
}


// NOTE:
// outer loop → rows
// inner loop → columns
// (5 - row) controls how many stars appear
// remaining columns print #