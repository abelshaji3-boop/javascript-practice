// pattern:
// H       H
// H       H
// H H H H H
// H       H
// H       H

for(let row = 1; row <= 5; row++){   // outer loop → rows

    let rowStr = ""                  // store characters for one row

    for(let col = 1; col <= 5; col++){   // inner loop → columns

        if(col == 1 || col == 5 || row == 3){   // left column, right column, middle row
            rowStr += "H "
        }else{
            rowStr += "  "                   // spaces inside
        }

    }

    console.log(rowStr)   // print the row
}


// NOTE:
// col 1 and col 5 → vertical lines of H
// row 3 → horizontal middle line
// together they form the letter H