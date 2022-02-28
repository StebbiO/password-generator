// Assignment code here
var result = "";
// var randomResult = "";
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

  var numSelect = window.confirm("Would you like to include numbers in your new password?");

  if (numSelect) {
    result = (pwNum + result);
    console.log(result);
  }

  var specialSelect = window.confirm("Would you like to include special characters in your new password?");

  if (specialSelect) {
    result = (pwSpecial + result);
    console.log(result);
  }

  // var randomNumber = Math.floor(Math.random() * result.length)+ 1;
  // console.log(randomNumber);

  // var resultObject = {
  //   length: Math.ceil(result.length / 2),
  //   input: result,
  // }

  console.log(result);

  // function randomInt(limit) {
  //   return Math.floor(Math.random() * Math.floor(limit));
  // }

  // function random(result) {
  //   var index = randomInt(result.length);
  //   return (result[index]);
  // }

  var randString = "";

  for (i = 0; i < numberSelect; i++) {
    var randomNumber = Math.floor(Math.random() * result.length);
    randString += result.substring(randomNumber, randomNumber +1);
    console.log(randString);
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
