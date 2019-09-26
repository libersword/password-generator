//Declare Variables
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789'
var specialChar = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var characters = '';
var displayPassword = document.getElementById("genPassword");
var submitBtn = document.querySelector("#genSubmit");

//Naming variables for user input for password generation
var userLength = document.getElementById("characterUserInput");
var userUpper = document.getElementById("upperCaseConfirm");
var userLower = document.getElementById("lowerCaseConfirm");
var userNumber = document.getElementById("numbersConfirm");
var userSpecial = document.getElementById("specialConfirm");

//a function to store values on submit
function userInput () {
  event.preventDefault();
  var passLength = userLength.value;
  console.log(passLength);
  var specialCharacters = userSpecial.value;
  console.log(specialCharacters);
  // var upperLetters = userUpper.value;
  // var lowerLetters = userLower.value;
  // var number = userNumber.value;
  // checkChecked();
  // passwordGenerator(passLength, characters);
  
}

// //a function to check checkboxes
// function checkChecked() {
//   if (upperLetters === "true") {
//   characters += uppercase;
// };
// if (lowerLetters === "true") {
//   characters += lowercase;
// };
// if (number === "true") {
//   characters += numbers;
// };
// if (specialCharacters === "true") {
//   characters += specialChar;
// };
// }

// //The function to generate the password
// function passwordGenerator(length, characters) {
//   var password = ' ';
//   for (var i=0; i<length; i++)
//   {
//     password +=characters.charAt(Math.floor(Math.random()*characters.length));
//   }
//   return password;
// }


// //displaying the password
// displayPassword.textContent = 'Your secure password is: ' + passwordGenerator(userLength, characters);

submitBtn.addEventListener("click", userInput);