// Assignment Code*/
 
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "=", "[", "]", "{", "}", ";", ":", "'", "<", ">", ",", ".", "?", "/"]

var characterLength = "";
var generateBtn = document.querySelector("#generate");
function generatePassword() {

  /*asks user how many characters to enter*/
  var characterLength = prompt("how many characters would you like your password to be? Must be between 8-128 characters.");
  /*sets character limit for password*/
  if (characterLength < 8 || characterLength > 128) {
    alert("password must contain between 8-128 characters");
    return
  }
  /*asks user what characters to use in password*/
  var hasUpperCase = confirm("Would you like to use uppercase letters in your password?");
  var hasLowerCase = confirm("Would you like to use lowercase letters in your password?");
  var hasNumbers = confirm("Would you like to use numbers in your password?");
  var hasSymbols = confirm("Would you like to use symbols in your password?");
  /*stores random characters for password*/

  var answers = []
  

  if (hasUpperCase) {
    answers = answers.concat(upperCase)
   }

  if (hasLowerCase) {
    answers = answers.contcat(lowerCase)
  }

  if (hasNumbers) {
    answers = answers.concat(numbers)
  }

  if (hasSymbols) {
    answers = answers.concat(symbols)
  }
  }
  
  var generatedPassword
  
  for (let i = 0; i < characterLength; ++i) {
  
    var random = Math.floor(Math.random() * answers.length);
    generatedPassword = answers[random];
  }



  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
   
}

generateBtn.addEventListener("click", writePassword);

