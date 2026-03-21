// pattern:
// 2 3 4 5
// 2 3 4 5
// 2 3 4 5

for(let row = 1; row <= 3; row++){   // outer loop → controls rows

    let rowStr = ""                  // stores numbers for one row

    for(let col = 2; col <= 5; col++){   // inner loop → numbers from 2 to 5
        rowStr += col + " "              // add column number
    }

    console.log(rowStr)   // print completed row
}


// NOTE:
// outer loop → repeats rows 3 times
// inner loop → prints numbers 2 to 5
// column variable is used because numbers increase horizontally