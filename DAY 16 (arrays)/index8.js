//Check if any number ends with digit 5

let array1 = [3,63,37,19,2]   

let boolval = array1.every((eachnum) =>
    {let lastdigit = eachnum % 10
        return lastdigit == 5
    })  

console.log(boolval)