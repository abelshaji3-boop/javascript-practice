// pattern:
// *
// # *
// # # *
// # # # *

for(let row = 1; row <= 4; row++){   // outer loop → controls rows

    let rowStr = ""                  // stores characters for one row

    for(let col = 1; col <= row; col++){   // inner loop → increases with row

        if(col == row){                   // last column of every row
            rowStr += "* "                // print *
        }else{
            rowStr += "# "                // otherwise print #
        }

    }

    console.log(rowStr)   // print the completed row
}


// NOTE:
// outer loop → rows
// inner loop → columns
// last position in each row → *
// remaining positions → #