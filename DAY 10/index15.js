// pattern (7 × 7 X shape):
// X           X
//   X       X
//     X   X
//       X
//     X   X
//   X       X
// X           X

for(let row = 1; row <= 7; row++){   // outer loop → rows

    let rowStr = ""                  // store characters for one row

    for(let col = 1; col <= 7; col++){   // inner loop → columns

        // print X on both diagonals
        if(col == row || col == (8 - row)){ 
            rowStr += "X "
        }else{
            rowStr += "  "           // spaces elsewhere
        }

    }

    console.log(rowStr)   // print the completed row
}


// NOTE:
// col == row → prints the main diagonal (top-left → bottom-right)
// col == (8 - row) → prints the opposite diagonal (top-right → bottom-left)
// 8 comes from (n + 1) where n = 7 columns
// both diagonals together form the X shape