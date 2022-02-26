// Assignment code here
var result = "";
// var randomResult = "";
var pwNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var pwLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var pwUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var pwSpecial = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

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
  } else {
    console.log(numberSelect);
  }

  var lowerSelect = window.confirm("Would you like to include lowercase letters in your new password?");

  if (lowerSelect) {
    result = (pwLowerCase + result);
    console.log (result);
  }

  var upperSelect = window.confirm("Would you like to include uppercase letters in your new password?");

  if (upperSelect) {
    result = (pwUpperCase + result);
    console.log(result);
  }

  var specialSelect = window.confirm("Would you like to include special characters in your new password?");

  if (specialSelect) {
    result = (pwSpecial + result);
    console.log(result);
  }

  parseInt(result);

  function randomNumber(result) {
    return Math.floor(Math.random() * result);
  }

  for (i = 0; i < numberSelect; i++) {
    var randomResult = (randomNumber(result));
    console.log(randomResult);
  }

}

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
