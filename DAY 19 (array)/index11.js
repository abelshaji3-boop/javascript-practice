// Print each city with highest sales

const salesData = [
  { city: "New York", sales: 5000 },
  { city: "Los Angeles", sales: 7000 },
  { city: "Chicago", sales: 6000 },
  { city: "New York", sales: 8000 },
  { city: "Los Angeles", sales: 6500 },
  { city: "Chicago", sales: 9000 },
  { city: "Houston", sales: 4000 },
  { city: "Houston", sales: 5500 },
];

let output = {}

for (const eachdata of salesData) {

    let cityname = eachdata.city
    let currsales = eachdata.sales

    if (cityname in output) {

        if (currsales > output[cityname]) {
            output[cityname] = currsales
        }

    } else {
        output[cityname] = currsales
    }
}

console.log(output)


// NOTES:

// 1. for...of loop is used to iterate array of objects.
// 2. Object (output) stores key-value pairs → city : highest sales.
// 3. 'in' operator checks if key exists.
// 4. Values are updated based on condition.
// 5. Final object contains highest value for each city.