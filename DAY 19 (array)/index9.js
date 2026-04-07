
// {thrissur:32,Thiruvananthapuram:33,Kozhikode:31,}
// print district with its highest temperature

const weatherData = [
  { district: "Thrissur", temp: 32 },
  { district: "Thiruvananthapuram", temp: 33 },
  { district: "Kozhikode", temp: 31 },
  { district: "Thrissur", temp: 28 },
  { district: "Kozhikode", temp: 27 },
  { district: "Ernakulam", temp: 26 },
  { district: "Ernakulam", temp: 30 },
  { district: "Thiruvananthapuram", temp: 29 },
];


//logic

//array of objects 
// print district with its highest temperature
// create an obj to store all details as key value pairs districtName:temp
// access each obj from the array
// check if the district is already in the object 
// if yes compare the temperature and update the highest temp as value 
// if not store data as keyvalue pairs districtName:temp 
// after the loop print the obj

let output = {}

weatherData.forEach((eachdata) => {

    let districtname = eachdata.district   // correct key
    let currenttemp = eachdata.temp        // correct key

    if (districtname in output) {

        if (currenttemp > output[districtname]) {
            output[districtname] = currenttemp
        }

    } else {
        output[districtname] = currenttemp
    }

})

console.log(output)


// NOTES:

// 1. Use correct key names from object.
// 2. forEach() is case-sensitive.
// 3. Compare temps and store highest.
// 4. Object stores final result.