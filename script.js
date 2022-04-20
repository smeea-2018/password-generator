// Assignment Code
const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  // User input for password length
  let passLength = prompt(
  "Enter  length of the password between 8 and 128 characters "
);
  
  return 10;
};

const getPasswordCriteria = () => {
  

  
};

const createRandomPassword = (pLength, criteria) => {
 
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
