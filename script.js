//Declare Variables
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789'
var specialChar = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var displayPassword = document.getElementById("genPassword");
var submitBtn = document.querySelector("#genSubmit");

//Naming variables for user input for password generation
var userLength = document.getElementById("characterUserInput");
var upperBox = document.getElementById("uppercaseConfirm");
var lowerBox = document.getElementById("lowercaseConfirm");
var numberBox = document.getElementById("numbersConfirm");
var specialBox = document.getElementById("specialConfirm");


//a function to store values on submit/check to see if the boxes are ticked to concatenate onto character string 
submitBtn.addEventListener("click", function(e) {
  event.preventDefault();
  var characters = '';
  var passLength = userLength.value;
  console.log(passLength);
  (upperBox.checked) ? characters += uppercase : '';
  (lowerBox.checked) ? characters += lowercase : '';
  (numberBox.checked) ? characters += numbers : '';
  (specialBox.checked) ? characters += specialChar : '';
  displayPassword.textContent = passwordGenerator(passLength, characters);
})


//The function to generate the password
function passwordGenerator(length, characters) {
  var password = ' ';
  for (var i=0; i<length; i++)
  {
    password +=characters.charAt(Math.floor(Math.random()*characters.length));
  }
  return password;
}