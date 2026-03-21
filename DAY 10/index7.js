
// pattern:
// 10 11 12 13
// 14 15 16 17
// 18 19 20 21
// 22 23 24 25

let num = 10   // starting number

for(let row = 1; row <= 4; row++){   // outer loop → controls rows

    let rowStr = ""                  // stores numbers for one row

    for(let col = 1; col <= 4; col++){   // inner loop → controls columns
        rowStr += num + " "              // add current number
           num++                        // increase number each time
    }

    console.log(rowStr)   // print completed row
}


// NOTE:
// num starts from 10
// each time the number increases by 1
// outer loop → rows
// inner loop → columns

