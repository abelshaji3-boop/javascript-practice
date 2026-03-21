// [ no,district,+ve cases, death rate, curred rate ,1st dose vaccine , 2nd dose vaccine ]

covid_data = [
  [1, "Ernakulam", 34000, 2000, 23000, 20000, 2000],
  [2, "Thiruvananthapuram", 25000, 1500, 18000, 15000, 1800],
  [3, "Kozhikode", 27000, 1800, 20000, 19000, 1700],
  [4, "Thrissur", 30000, 1900, 22000, 21000, 2000],
  [5, "Kottayam", 20000, 1200, 15000, 14000, 1200],
  [6, "Kannur", 22000, 1300, 17000, 16000, 1300],
  [7, "Alappuzha", 24000, 1400, 19000, 18000, 1500],
  [8, "Pathanamthitta", 18000, 1000, 14000, 13000, 1100],
];

// Is there any district with +ve cases > 25000 
let anypos = covid_data.some((eachdata)=>eachdata[2]>25000) 
anypos ? console.log("yes") : console.log("nah")

// Check every district with +ve cases > 25000 or not 
let everypos = covid_data.every((eachdata)=>eachdata[2]>25000)
everypos ? console.log("yes") : console.log("no")

// Print total number of positive cases
let totalpos = covid_data.reduce((acc,curr)=>acc+curr[2],0)
console.log(totalpos)

// District having Highest +ve case :
let highestpos = covid_data.reduce((acc,curr)=>acc[2]>curr[2] ? acc:curr)
console.log(highestpos[1])

// District having Highest 1st dose vaccine :
let highdose1 = covid_data.reduce((acc,curr)=>acc[5]>curr[5]?acc:curr)
console.log(highdose1[1])

// District having lowest death :
let lowdeath = covid_data.reduce((acc,curr)=>acc[3]<curr[3]?acc:curr)
console.log(lowdeath[1])

// Sort data with +ve case in descending order :
let sortpos = covid_data.sort((a,b)=>b[2]-a[2])
console.log(sortpos)

// Sort data with 1st dose vaccine (ascending):
let sortdose = covid_data.sort((a,b)=>a[5]-b[5])
console.log(sortdose)

// Print thrissur details
let thrissur = covid_data.find((eachdata)=>eachdata[1]=="Thrissur")
console.log(thrissur)

// Print total number of curred cases
let totalcured = covid_data.reduce((acc,curr)=>acc+curr[4],0)
console.log(totalcured)


// NOTE:
// [2]=positive, [3]=death, [4]=cured, [5]=1st dose