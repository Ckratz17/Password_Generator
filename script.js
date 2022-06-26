// Assignment Code
var Length = 8;
var choice = []

var specialChar = ["!","@","#","$","%","&","*","_","-","+",]
var lowerCase = ['a','B','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];

// Write password to the #password input

var generateBtn = document.querySelector("#generate")

function generatePassword () {
    console.log("Ouch! That hurt!")

    //need to prompt the user for the password
    //password length 8 < 128
    //lowercase, upercase, numbers, special characters
    //validate the input
    //generate password based on criteria


    //display generate password on page
     return "Generated Password will go here!"
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




