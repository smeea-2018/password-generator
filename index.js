const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  // User input for password length
  const passwordLength = prompt(
    "Enter  length of the password between 8 and 128 characters "
  );

  // console.log(passLength);
  const passwordLengthInt = parseInt(passwordLength, 10);
  // Check if input meets the specified criteria

  return passwordLengthInt;
};
const getPasswordCriteria = () => {
  // An array declared to store the criteria;
  const arrCriteria = [];
  // user is presented with first question and result stored in array.
  const lowercaseCriteria = confirm("Do you want to enter lowercase?");
  if (lowercaseCriteria) {
    arrCriteria.push("abcdefghijklmnopqrstuvwxyz");
  }

  const uppercaseCriteria = confirm("Do you want to enter uppercase");

  if (uppercaseCriteria) {
    arrCriteria.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  const numberCriteria = confirm("Do you want to enter a number");
  if (numberCriteria) {
    arrCriteria.push("0123456789");
  }
  const specialcharCriteria = confirm("Do you want to enter special character");

  if (specialcharCriteria) {
    arrCriteria.push(" !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~");
  }

  return arrCriteria;
};
const createRandomPassword = (passwordLength, passwordCriteria) => {
  const passwordGenerated = [];
  // Loop to traverse through the array of user selected criteria
  for (let i = 0; i < passwordLength; i += 1) {
    // Generates random index of the array
    const index = Math.floor(Math.random() * passwordCriteria.length);

    const criteriaStringArray = passwordCriteria[index];
    // Generates random password
    const randomCharacterIndex = Math.floor(
      Math.random() * criteriaStringArray.length
    );

    const randomCharacter = criteriaStringArray.charAt(randomCharacterIndex);

    passwordGenerated.push(randomCharacter);
  } // for ends here

  return passwordGenerated.join("");
};
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();
  if (passwordLength >= 8 && passwordLength <= 128) {
    // get the password criteria
    const passwordCriteria = getPasswordCriteria();

    // create random password
    const password = createRandomPassword(passwordLength, passwordCriteria);

    return password;
  } else {
    alert("Please enter the value between 8 and 128");
    return "";
  }
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
