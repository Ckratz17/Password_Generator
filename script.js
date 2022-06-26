// Assignment Code
var Length = 8;
var choice = []
var specialChar = ["!","@","#","$","%","&","*","_","-","+",]
var lowerCase = ['a','B','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];

// Write password to the #password input

var generateBtn = document.querySelector("#generate")
function popup() {
    choice = [];

    Length = parseInt(prompt("How many characters do you want your password to be? (must be at least 8 characters)"));

    if(isNaN(Length) || Length < 8 || Length > 128) { //alert if someone enters a character that is not a number 8-128
        alert("Character length has to be a number, 8 - 128 digits. Try agin.")
    }

    if(confirm("Do you want lowercase letters in your password?")) {
        choice = choice.concat(lowerCase);
    }

    if(confirm("Do you want uppercase letters in your password?")) {
        choice = choice.concat(upperCase);
    }

    if(confirm("Do you want special characters in your password?")) {
        choice = choice.concat(specialChar);
    }

    if(confirm("Do you want numbers in your password?")) {
        choice = choice.concat(numbers);
    }
    return true;
}

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




