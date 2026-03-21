//w.a.p to print total count of digits 123456789

let num = 123456789;
let count = 0;

while (num > 0) {
  num = Math.floor(num / 10); // remove last digit
  count++;                    // increase digit count
}

console.log("Total digits:", count);