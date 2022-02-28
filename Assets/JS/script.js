// Assignment code here
var result = "";
var pwNum = "1234567890";
var pwLowerCase = "abcdefghijklmnopqrstuvwxyz";
var pwUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pwSpecial = "!#$%&()*+,-./:;<=>?@][^_`{|}~" + '"' + "'" + "\\";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var numberSelect = window.prompt("Please select the number of characters in your new password between 8 and 128");

  if (numberSelect < 8) {
    window.alert("Please select a valid number");
    generatePassword();
  } else if (numberSelect > 128) {
    window.alert("Please select a valid number");
    generatePassword();
  } else if (isNaN(numberSelect)) {
    window.alert("Please select a valid number");
    generatePassword();
  } else {
  
  }

  var lowerSelect = window.confirm("Would you like to include lowercase letters in your new password?");

  if (lowerSelect) {
    result = (pwLowerCase + result);
  }

  var upperSelect = window.confirm("Would you like to include uppercase letters in your new password?");

  if (upperSelect) {
    result = (pwUpperCase + result);
  }

  var numSelect = window.confirm("Would you like to include numbers in your new password?");

  if (numSelect) {
    result = (pwNum + result);
  }

  var specialSelect = window.confirm("Would you like to include special characters in your new password?");

  if (specialSelect) {
    result = (pwSpecial + result);
  }

  if (!lowerSelect && !upperSelect && !numSelect && !specialSelect) {
    window.alert("Please select at least one character type!");
    generatePassword();
  }


  var randString = "";

  for (i = 0; i < numberSelect; i++) {
    var randomNumber = Math.floor(Math.random() * result.length);
    randString += result.substring(randomNumber, randomNumber + 1);
  }

  result = "";

  return randString;

}

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
