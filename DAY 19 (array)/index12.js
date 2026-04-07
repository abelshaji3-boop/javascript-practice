// Product operations

const products = [
  { pid: 100, pName: "Apple", brand: "5G", price: 120000, display: "OLED" },
  { pid: 101, pName: "Samsung", brand: "4G", price: 90000, display: "AMOLED" },
  { pid: 102, pName: "OnePlus", brand: "4G", price: 75000, display: "Fluid AMOLED" },
  { pid: 103, pName: "Pixel", brand: "3G", price: 85000, display: "OLED" },
  { pid: 104, pName: "Xiaomi", brand: "3G", price: 40000, display: "Super AMOLED" },
];

// print product names
products.forEach((eachprod)=>console.log(eachprod.pName))


// print mobiles with OLED display
let oledmobiles = products.filter((eachProd)=>eachProd.display=="OLED")
console.log(oledmobiles)


console.log(`-------------------------------`);


// print 3G mobile names only
let mobilename = products
  .filter((eachProd)=>eachProd.brand=="3G")
  .map((eachProd)=>eachProd.pName)

console.log(mobilename)


console.log(`-------------------------------`);


// sort mobiles based on price (ascending)
let sortedArray = products.toSorted((a,b)=>a.price - b.price)
console.log(sortedArray)


console.log(`-------------------------------`);


// print costly mobile
let length = sortedArray.length
console.log(sortedArray[length-1])


// print lowest cost mobile
console.log(sortedArray[0])


console.log(`-------------------------------`);


// NOTES:

// 1. forEach() → used for iteration (no return).
// 2. filter() → returns elements based on condition.
// 3. map() → transforms data (used to extract names).
// 4. toSorted() → returns new sorted array (original unchanged).
// 5. a.price - b.price → ascending order sorting.
// 6. last element → highest value, first element → lowest value.