// pattern:
// T T T T T
//     T
//     T
//     T
//     T

for(let row = 1; row <= 5; row++){   // outer loop → rows

    let rowStr = ""                  // store characters for one row

    for(let col = 1; col <= 5; col++){   // inner loop → columns

        if(row == 1 || col == 3){        // first row or middle column
            rowStr += "T "
        }else{
            rowStr += "  "               // spaces for empty positions
        }

    }

    console.log(rowStr)   // print the row
}


// NOTE:
// row 1 → prints T across the top
// column 3 → prints vertical line
// together they form the letter T