// pattern:
// # # # #
// #     #
// #     #
// # # # #

for(let row = 1; row <= 4; row++){   // outer loop → rows

    let rowStr = ""                  // store characters for one row

    for(let col = 1; col <= 4; col++){   // inner loop → columns

        // print # on borders
        if(row == 1 || row == 4 || col == 1 || col == 4){
            rowStr += "# "
        }else{
            rowStr += "  "           // print space inside
        }

    }

    console.log(rowStr)   // print the completed row
}


// NOTE:
// row 1 and row 4 → full #
// col 1 and col 4 → border #
// inside area → spaces