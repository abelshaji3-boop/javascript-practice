//w.a.p to find the sum of digits of a number 123456789
let num = 123456789;
let sum = 0;

while (num > 0) {
  let lastdigit = num % 10;     // get last digit
  sum = sum + lastdigit;        // add digit to sum
  num = Math.floor(num / 10); // remove last digit
}

console.log("Sum of digits:", sum);