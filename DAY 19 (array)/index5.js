// Object operations

let car = {
    name : "polo",
    model : "petrol",
    manufacturer : "volkswagen",
    price : 800000,
}

// dot notation
console.log(car.name)   

// bracket notation
console.log(car["name"])

console.log(car['name'], car['price'])

// check key
if('model' in car){
    console.log(car.model)
}

// add variant
car['variant'] = ['automatic','manual']

// add color
car.color = 'red'

// update price
car.price = 1000000

// add new variant - hybrid
car.variant.push('hybrid')

console.log(car)


// NOTES:

// 1. Use correct object name (car, not obj).
// 2. 'in' operator checks if key exists.
// 3. New properties can be added using dot or bracket.
// 4. Arrays inside objects can be updated using push().
// 5. Object values can be updated directly.