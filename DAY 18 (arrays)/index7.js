// Password Validation

let password = "qwertyqw%ertyuio";   // input password

const hasUpper = (word) => {
  let bool = false;

  for (const element of word) {   // iterate each character

    // check if character is uppercase
    if (
      element === element.toUpperCase() && 
      element !== element.toLowerCase()
    ) {
      bool = true;   // uppercase found
    }

  }

  return bool;   // return result
};

let charLen = password.length   // get length of password

// validation conditions
if (charLen >= 8 && hasUpper(password) && password.includes("%")) {
  console.log("Success")        // valid password
} else {
  console.log("invalid entry")  // invalid password
}


// NOTES:

// 1. Password must be at least 8 characters long.
// 2. Password must contain at least one uppercase letter.
// 3. Password must contain special character "%".
// 4. hasUpper() checks for uppercase letters.
// 5. includes("%") checks if % exists in password.