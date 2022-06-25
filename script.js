// Assignment Code


// Write password to the #password input
var generateBtn = document.querySelector("#generate")

function generatePassword () {
    console.log("Ouch! That hurt!")
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




