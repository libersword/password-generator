//Declare Variables
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789'
var specialChar = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var displayPassword = document.getElementById("genPassword");
var submitBtn = document.querySelector("#genSubmit");
var copyBtn = document.querySelector("#copyBtn");

//Naming variables for user input for password generation
var userLength = document.getElementById("characterUserInput");
var upperBox = document.getElementById("uppercaseConfirm");
var lowerBox = document.getElementById("lowercaseConfirm");
var numberBox = document.getElementById("numbersConfirm");
var specialBox = document.getElementById("specialConfirm");


//on submit, store values, check for checkbox boolean, concatenate onto character string, pass those inputs through password gen function, return password and display
submitBtn.addEventListener("click", function(e) {
  event.preventDefault();
  var characters = '';
  var passLength = userLength.value;
  // console.log(passLength); for testing
  //Check if box is checked. if true concatenate onto character string, if false do nothing
  (upperBox.checked) ? characters += uppercase : '';
  (lowerBox.checked) ? characters += lowercase : '';
  (numberBox.checked) ? characters += numbers : '';
  (specialBox.checked) ? characters += specialChar : '';
  //run these perameters through the generator function, and return to display via text content
  displayPassword.value = passwordGenerator(passLength, characters);
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

//Copy to clipboard
copyBtn.addEventListener("click",function copyToClipboard(){
  var copyText = document.getElementById("genPassword");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

})