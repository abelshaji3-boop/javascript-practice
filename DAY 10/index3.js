// pattern:
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

for(let row = 1; row <= 4; row++){   // outer loop → controls rows

    let rowStr = ""                  // stores numbers for one row

    for(let col = 1; col <= 4; col++){   // inner loop → controls columns
        rowStr += col + " "              // add column number
    }

    console.log(rowStr)   // print the completed row
}


// NOTE:
// outer loop → repeats rows 4 times
// inner loop → prints numbers from 1 to 4
// col is used because the numbers change horizontally


}