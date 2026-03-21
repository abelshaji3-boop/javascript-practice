
// pattern:
// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
// 5 5 5 5

for(let row = 1; row <= 5; row++){   // outer loop → controls rows

    let rowstr = ""                  // stores values for one row

    for(let col = 1; col <= 4; col++){   // inner loop → controls columns
        rowstr += row + " "              // add the row number each time
    }

    console.log(rowstr)   // print the completed row
}


// NOTE:
// outer loop → decides the row number (1 to 5)
// inner loop → prints the row number 4 times
// += is used to keep adding values to the string

