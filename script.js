// Assignment Code*/
/*character arrays*/
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "=", "[", "]", "{", "}", ";", ":", "'", "<", ">", ",", ".", "?", "/"]

var generateBtn = document.querySelector("#generate");
function generatePassword() {

  /*asks user how many characters to enter*/
  var characterLength = prompt("how many characters would you like your password to be? Must be between 8-128 characters.");
  /*sets character limit for password*/
  if (characterLength < 8 || characterLength > 128) {
    /*brings user back to enter character length*/
    alert("password must contain between 8-128 characters");
    return
  }
  /*question prompts for password*/
  var hasUpperCase = confirm("Would you like to use uppercase letters in your password?");
  var hasLowerCase = confirm("Would you like to use lowercase letters in your password?");
  var hasNumbers = confirm("Would you like to use numbers in your password?");
  var hasSymbols = confirm("Would you like to use symbols in your password?");
  /*stores random characters for password*/

  /*array that stores choices*/
  var answers = []

  /*if statements for user choices*/
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

/*for loop for character amount*/
for (let i = 0; i < answers; ++i) {
  /*randomizes characters*/
  var answers = Math.floor(Math.random() * generatedPassword.length);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

