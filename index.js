const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  // User input for password length
  const passLength = prompt(
    "Enter  length of the password between 8 and 128 characters "
  );

  // console.log(passLength);
  const passLengthInt = parseInt(passLength, 10);
  // Check if input meets the specified criteria
  if (passLengthInt >= 8 && passLengthInt <= 128) {
    return passLengthInt;
  } else {
    alert("Please enter the value between 8 and 128");
    window.location.reload(true);
    document.getElementById("password").reset();
  }
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