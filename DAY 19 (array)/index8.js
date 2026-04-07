
//find the first recursive character from the given pattern = "ABBCCBAD"
//ans: B
//craete a object - to store each char as string and its representation count as value
//itterate through the array and get eachEl
//check if the element is present in the obj
//if yes print the lement, break

let str = "ABBCCBAD"

let count = {}  

for (let ch of str) {

    if (ch in count) {
        console.log(ch) 
        break;            
    } else {
        count[ch] = 1  
    }

}
