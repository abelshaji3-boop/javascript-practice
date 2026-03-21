// age group checker
// 0-12 :- Children
// 13-19 :- Teenager
// 20-59 :- Adult
// 60+ :- senior citizen

let i = 11;
let product = 1;

while (i < 40) {
  if (i % 2 !== 0) {
    product = product * i;
  }
  i++;
}

console.log(product);