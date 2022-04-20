// Assignment Code
const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  // User input for password length
  let passLength = prompt(
  "Enter  length of the password between 8 and 128 characters "
);

console.log(passLength);
const passLengthInt = parseInt(passLength);
// Check if input meets the specified criteria
if (passLengthInt >= 8 && passLengthInt <= 128) {
  return passLengthInt;
} else {
  alert("Please enter the value between 8 and 128");
}
  
};

const getPasswordCriteria = () => {
  // An array declared to store the criteria;
let arr = [];
// user is presented with first question and result stored in array.
let c1 = prompt("Do you want to enter lowercase");
console.log(c1);
if (c1 == "y" || c1 == "Y") {
  arr.push("abcdefghijklmnopqrstuvwxyz");
} else;

let c2 = prompt("Do you want to enter lowercase");
if (c2 == "y" || c1 == "Y") {
  arr.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
} else;

//let c3 = Prompt("Do you want to enter lowercase");
if (c3 == "y" || c1 == "Y") {
  arr.push("0123456789");
} else;

//let c4 = Prompt("Do you want to enter lowercase");
if (c4 == "y" || c1 == "Y") {
  arr.push(" !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~");
} else;

return arr;

  
};

const createRandomPassword = (pLength, criteria) => {

 let count = 0;
let passwordi = "";
while (count < pLength) {
  // Loop to traverse through the array of user selected criteria 
  for (let j = 0; j < criteria.length; j += 1) {
    // Generates random index of the array
    const index = Math.floor(Math.random() * criteria.length);
    console.log(index);

    const strarr = criteria[index];
    // Generates random password
    passwordi += strarr.charAt(Math.floor(Math.random() * strarr.length));
    count += 1;
    if (count >= pLength) {
      break;
    }
  }
}
console.log(passwordi);
return passwordi;
  }
 
  
};

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();
  console.log("password length is " + passwordLength);

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  // create random password
  const password = createRandomPassword(passwordLength, passwordCriteria);

  return password;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
