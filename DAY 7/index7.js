//  print the product of all odd numbers b/w 10 and 40

let i = 11;
let product = 1;

while (i < 40) {
  if (i % 2 !== 0) {
    product = product * i;
  }
  i++;
}

console.log(product);