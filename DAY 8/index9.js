//w.a.p to find the largest digit among the given numbers 765498..

let num = 765498;
let largest = 0;

while (num > 0) {
  let digit = num % 10;       // extract last digit

  if (digit > largest) {     // check if digit is greater
    largest = digit;
  }

  num = Math.floor(num / 10); // remove last digit
}

console.log("Largest digit is:", largest);