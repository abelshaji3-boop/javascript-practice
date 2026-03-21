// pattern:
// * * * *
// * * *
// * *
// *

for(let row = 4; row >= 1; row--){   // outer loop → rows decrease from 4 to 1

    let rowStr = ""                  // stores stars for one row

    for(let col = 1; col <= row; col++){   // inner loop → print stars equal to row value
        rowStr += "* "                    // add star and space
    }

    console.log(rowStr)   // print the completed row
}


// NOTE:
// outer loop → controls rows (4 → 1)
// inner loop → prints stars equal to current row number
// stars decrease each row