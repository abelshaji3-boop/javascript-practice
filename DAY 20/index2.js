const accounts = [
  {
    acno: 1000,
    ac_type: "saving",
    balance: 45000,
    transaction: [
      { to: 1001, amount: 5000, msg: "ebill", mode: "gpay" },
      { to: 1002, amount: 2000, msg: "emi", mode: "neft" },
      { to: 1003, amount: 1000, msg: "recharge", mode: "phonePe" },
    ],
  },
  {
    acno: 1001,
    ac_type: "current",
    balance: 30000,
    transaction: [
      { to: 1000, amount: 4000, msg: "rent", mode: "upi" },
      { to: 1004, amount: 3500, msg: "shopping", mode: "net banking" },
    ],
  },
  {
    acno: 1002,
    ac_type: "saving",
    balance: 55000,
    transaction: [
      { to: 1003, amount: 5000, msg: "loan", mode: "rtgs" },
      { to: 1005, amount: 1500, msg: "grocery", mode: "upi" },
    ],
  },
  {
    acno: 1003,
    ac_type: "saving",
    balance: 20000,
    transaction: [
      { to: 1002, amount: 2500, msg: "internet bill", mode: "neft" },
      { to: 1004, amount: 3200, msg: "electricity", mode: "gpay" },
    ],
  },
  {
    acno: 1004,
    ac_type: "current",
    balance: 60000,
    transaction: [
      { to: 1005, amount: 7000, msg: "car loan", mode: "phonePe" },
      { to: 1001, amount: 2200, msg: "fuel", mode: "upi" },
    ],
  },
];



// total number of accounts
console.log(accounts.length)


// print account number whose ac_type is saving
let savingAcc = accounts
  .filter((acc)=>acc.ac_type=="saving")
  .map((acc)=>acc.acno)

console.log(savingAcc)

console.log(`---------------------`);


// print the balance of account number 1000
let acc1000 = accounts.find((acc)=>acc.acno==1000)
console.log(acc1000.balance)


// flatten all transactions
let allTrans = accounts.map((acc)=>acc.transaction).flat()


// print all phonePe transaction
let phonepayTrans = allTrans.filter((eachTrans)=>eachTrans.mode=="phonePe")
console.log(phonepayTrans)

console.log("------------------------------------------");


// print all transactions > 3000
let gt3000 = allTrans.filter((eachTrans)=>eachTrans.amount > 3000)
console.log(gt3000)

console.log("------------------------------------------");


// print credit transaction of account 1002
let creditedTo1002 = allTrans.filter((eachTrans)=>eachTrans.to == 1002)
console.log(creditedTo1002)

console.log("-----------------------------");


// print total credited amount to 1002
let total1002Amt = creditedTo1002.reduce((acc,curr)=>acc+curr.amount,0)
console.log(total1002Amt)


// print debit transaction of 1002
let details1002 = accounts.find((eachAcc)=>eachAcc.acno==1002)

let debit1002Array = details1002.transaction

let debitAmount = debit1002Array.reduce((acc,curr)=>acc+curr.amount,0)

console.log(debitAmount)

console.log(debit1002Array)

console.log("--------------------------------------------");


// transaction history of 1002
let history = [...debit1002Array, ...creditedTo1002]
console.log(history)


// current balance of 1002
let currentBalance = details1002.balance + total1002Amt
console.log(currentBalance)


// Account with highest balance
let highestAcc = accounts.reduce((acc,curr)=>acc.balance > curr.balance ? acc : curr)

console.log(highestAcc.acno)