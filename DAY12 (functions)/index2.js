 // * * * * *
 // * *   * *
 // *   *   *
 // * *   * *
 // * * * * *

 for (let row = 1; row <= 5; row++) {

    let rowStr = "// "

    for (let col = 1; col <= 5; col++) {

        if (
            row == 1 || row == 5 ||
            col == 1 || col == 5 ||
            row == col ||
            col == (6 - row)
        ) {
            rowStr += "* "
        } else {
            rowStr += "  "
        }

    }

    console.log(rowStr)
}


// NOTE
// border → row1,row5,col1,col5
// row==col → main diagonal
// col==6-row → opposite diagonal