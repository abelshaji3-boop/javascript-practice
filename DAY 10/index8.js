// pattern:
// // * * * *
// // * # # *
// // * # # *
// // * * * *

for(let row = 1; row <= 4; row++){   // outer loop → rows

    let rowStr = " "               // stores numbers

    for(let col = 1; col <= 4; col++){   // inner loop → columns

        if(row == 2 || row == 3){        // middle rows
            if(col == 2 || col == 3){
                rowStr += "# "           // middle columns → #
            }else{
                rowStr += "* "           // edges → *
            }
        }else{
            rowStr += "* "               // first and last rows → *
        }

    }

    console.log(rowStr)   // print the row
}


// NOTE:
// outer loop → rows
// inner loop → columns
// rows 2 and 3 + columns 2 and 3 → print #