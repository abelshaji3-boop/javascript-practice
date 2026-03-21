// pattern:
// * * * *
// # # # #
// * * * *
// # # # #

for(let row = 1; row <= 4; row++){   // outer loop → controls rows

    let rowstr = ""                  // store characters for each row

    for(let col = 1; col <= 4; col++){   // inner loop → controls columns

        if(row % 2 != 0){                // check if row is odd
            rowstr += "* "               // odd row → print *
        }else{
            rowstr += "# "               // even row → print #
        }

    }

    console.log(rowstr)   // print completed row
}


// NOTE:
// outer loop → rows
// inner loop → columns
// row % 2 → checks odd or even row
// odd row → *
// even row → #