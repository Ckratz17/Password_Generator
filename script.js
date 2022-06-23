// Assignment Code
var letters =("abcdefghijklmnopqrstuvwxyz")//letter variables
var numbers =(1234567890)//number variables
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

