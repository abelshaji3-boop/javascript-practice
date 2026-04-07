const customers = [
  {
    id: 1,
    name: "Arjun",
    type: "premium",
    wallet: 70000,
    orders: [
      { to: "Amazon", amount: 5000, category: "electronics", mode: "upi" },
      { to: "Swiggy", amount: 800, category: "food", mode: "card" },
    ],
  },
  {
    id: 2,
    name: "Meera",
    type: "regular",
    wallet: 25000,
    orders: [
      { to: "Flipkart", amount: 12000, category: "electronics", mode: "netbanking" },
      { to: "Zomato", amount: 600, category: "food", mode: "upi" },
    ],
  },
  {
    id: 3,
    name: "Rahul",
    type: "premium",
    wallet: 50000,
    orders: [
      { to: "Ajio", amount: 3000, category: "fashion", mode: "card" },
      { to: "Amazon", amount: 7000, category: "electronics", mode: "upi" },
    ],
  },
  {
    id: 4,
    name: "Sneha",
    type: "regular",
    wallet: 15000,
    orders: [
      { to: "Myntra", amount: 2000, category: "fashion", mode: "upi" },
      { to: "Swiggy", amount: 1200, category: "food", mode: "card" },
    ],
  },
];

// 🟢 Basic

// 1. Total number of customers
console.log(customers.length)

// 2. Print all premium customers
let premiumcustomers = customers.filter((eachcustomers)=>eachcustomers.type=="premium")
console.log(premiumcustomers)

// 3. Print wallet balance of customer id = 3
let cust3 = customers.find((eachcustomer)=>eachcustomer.id==3)
console.log(cust3.wallet)

// 4. Get all orders (flatten array)
let allorders = customers.flatMap((eachcustomer)=>eachcustomer.orders)
console.log(allorders)


// 🟡 Intermediate

// 5. Print all UPI transactions
let upiOrders = allorders.filter((eachOrder)=>eachOrder.mode=="upi")
console.log(upiOrders)

// 6. Print all orders where amount > 5000
let gt5000 = allorders.filter((eachOrder)=>eachOrder.amount > 5000)
console.log(gt5000)

// 7. Print all food category orders
let foodOrders = allorders.filter((eachOrder)=>eachOrder.category=="food")
console.log(foodOrders)

// 8. Find all orders made to Amazon
let amazonOrders = allorders.filter((eachOrder)=>eachOrder.to=="Amazon")
console.log(amazonOrders)


// 🔵 Advanced

// 9. Total amount spent by each customer
customers.forEach((eachcustomer)=>{
    let custName = eachcustomer.name
    let totalAmt = eachcustomer.orders.reduce((acc,curr)=>acc+curr.amount,0)
    console.log(custName, totalAmt)
})

// 10. Total amount spent via card
let cardOrder = allorders.filter((eachOrder)=>eachOrder.mode=="card")
let cardTotal = cardOrder.reduce((acc,curr)=>acc+curr.amount,0)
console.log(cardTotal)

// 11. Find customer with highest wallet balance
let highestbalance = customers.reduce((acc,curr)=>acc.wallet > curr.wallet ? acc:curr)
console.log(highestbalance)

// 12. Find total money spent on electronics
let electronics = allorders.filter((eachorder)=>eachorder.category=="electronics")
let totalspent = electronics.reduce((acc,curr)=>acc+curr.amount,0)
console.log(totalspent)


// 🔴 Challenging (Interview Level)

// 13. Transaction history of customer id = 2
let id2details = customers.find((eachcustomer)=>eachcustomer.id==2)
console.log(id2details.orders)

// 14. Total spent by premium users only
let premiumorders = premiumcustomers.flatMap((eachcust)=>eachcust.orders)
let totalpremiumspent = premiumorders.reduce((acc,curr)=>acc+curr.amount,0)
console.log(totalpremiumspent)

// 15. Find most used payment mode
let output = {}

allorders.forEach((eachorder)=>{
    let methodName = eachorder.mode

    if(methodName in output){
        output[methodName]+= 1
    }else{
        output[methodName]=1
    }
})

let outputArray = Object.entries(output)
let mostUsed = outputArray.reduce((acc,curr)=>acc[1]>curr[1]? acc:curr)
console.log(mostUsed[0])

// 16. Find customer who spent the most
let custoutput = {}

customers.forEach((eachcust)=>{
    let custName = eachcust.name
    let totalAmt = eachcust.orders.reduce((acc,curr)=>acc+curr.amount,0)
    custoutput[custName] = totalAmt
})

let custArray = Object.entries(custoutput)
let mostspent = custArray.reduce((acc,curr)=>acc[1]>curr[1]?acc:curr)

console.log(mostspent[0])