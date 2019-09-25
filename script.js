//Declare Variables
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789'
var specialChar = '0123456789';
var characters = '';
var displayPassword = document.getElementById("genPassword");

//Prompt the user for password generation
var userLength = prompt("How long do you want your password to be? Must be between 8 and 128 characters.");
Number(userLength);
var userSpecial = prompt("Do you want special characters?");
var userNumber = prompt("Do you want numbers?");
var userLower = prompt("Do you want uppercase letters?");
var userUpper = prompt("Do you want lowercase letters?");

//If the user wants the various requirements, concatonate want they want into one string of characters for the program to choose from
if (userUpper === "yes") {
  characters += uppercase;
};
if (userLower === "yes") {
  characters += lowercase;
};
if (userNumber === "yes") {
  characters += numbers;
};
if (userSpecial === "yes") {
  characters += specialChar;
};

//The function to generate the password
function passwordGenerator(length, characters) {
  var password = ' ';
  for (var i=0; i<length; i++)
  {
    password +=characters.charAt(Math.floor(Math.random()*characters.length));
  }
  return password;
}

//for testing purposes
console.log(passwordGenerator(userLength, characters));

//displaying the password
displayPassword.textContent = 'Your secure password is: ' + passwordGenerator(userLength, characters);