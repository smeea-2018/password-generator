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
    return false;
  }
};

const getPasswordCriteria = () => {
  // An array declared to store the criteria;
  const arr = [];
  // user is presented with first question and result stored in array.
  let c1 = prompt("Do you want to enter lowercase");
  console.log("Yo entered " + c1 + " for c1");
  if (c1 == "y" || c1 == "Y") {
    arr.push("abcdefghijklmnopqrstuvwxyz");
  } else;

  const c2 = prompt("Do you want to enter uppercase");
  console.log("Yo entered " + c2 + " for c2");
  if (c2 == "y" || c1 == "Y") {
    arr.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  } else;

  const c3 = prompt("Do you want to enter a number");
  console.log("Yo entered " + c3 + " for c3");
  if (c3 == "y" || c1 == "Y") {
    arr.push("0123456789");
  } else;

  const c4 = prompt("Do you want to enter special character");
  console.log("Yo entered " + c4 + " for c4");
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
      if (count >= pLength) {
        break;
      } //  end of if

      // Generates random index of the array
      const index = Math.floor(Math.random() * criteria.length);
      console.log("randomly generated index " + index);

      let strarr = criteria[index];
      // Generates random password
      passwordi += strarr.charAt(Math.floor(Math.random() * strarr.length));
      count += 1;
    } // for ends here. ended after break before
    for (let j = 0; j < criteria.length; j += 1) {
      if (count >= pLength) {
        break;
      }

      let strarr = criteria[j];
      console.log("index " + j);
      // Generates random password
      passwordi += strarr.charAt(Math.floor(Math.random() * strarr.length));
      count += 1;
    } //end for
  } //End of while loop
  console.log(passwordi);
  return passwordi;
};

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();
  console.log("password length is " + passwordLength);

  if (passwordLength == "false") {
    return;
  }

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
