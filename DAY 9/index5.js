
// check if a year is a leap year

let year = 2000   // input year

// leap year condition
if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)){
    console.log("leap year")
}else{
    console.log("not a leap year")
}


// NOTE:
// A leap year occurs:
// 1. If the year is divisible by 400
// OR
// 2. If the year is divisible by 4 but not divisible by 100

// Examples:
// 2000 → leap year (divisible by 400)
// 2024 → leap year (divisible by 4 but not 100)
// 1900 → not a leap year (divisible by 100 but not 400)