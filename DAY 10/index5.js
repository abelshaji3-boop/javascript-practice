
// pattern:
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
// 5 5 5 5

for(let row = 2; row <= 5; row++){   // outer loop → rows start from 2

    let rowStr = ""                  // store numbers for one row

    for(let col = 1; col <= 4; col++){   // inner loop → 4 columns
        rowStr += row + " "              // print the row number
    }

    console.log(rowStr)   // print the completed row
}


// NOTE:
// outer loop controls row values (2 → 5)
// inner loop prints the same number 4 times in each row

