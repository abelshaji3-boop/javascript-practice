// function to convert Fahrenheit to Celsius

function convertToCelsius(fahrenheit){   // parameter: temperature in Fahrenheit

    let celsius = (fahrenheit - 32) * 5 / 9   // formula to convert F → C

    return celsius   // return the Celsius value
}

let result = convertToCelsius(100)   // calling the function

console.log(result)   // print the result


// NOTES:
// Fahrenheit → input temperature
// Formula: (F - 32) × 5 / 9
// return sends the calculated value back to where the function was called