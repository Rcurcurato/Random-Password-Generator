//character arrays//
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "=", "[", "]", "{", "}", ";", ":", "'", "<", ">", ",", ".", "?", "/"]

//variable for grabbing generate button element from html
var generateBtn = document.querySelector("#generate");

//global scope function that has local scope functions within to make webpage function
function generatePassword() {

  //prompt that will ask user how many characters they would like their password to be
  var characterLength = prompt("how many characters would you like your password to be? Must be between 8-128 characters.");

  /*sets character limit for password*/
  if (characterLength === null) {

    //asks user to enter character length again//
    return "";
  }

  //converts the character length from a string to an integer
  characterLength = parseInt(characterLength);

  //if user doesn't enter a number they will be asked to try again 
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Password must be between 8-128 characters. Please try again.")
    return "";
  }

  //question prompts for what kind of characters the user would like in their password//
  var hasUpperCase = confirm("Would you like to use uppercase letters in your password?");
  var hasLowerCase = confirm("Would you like to use lowercase letters in your password?");
  var hasNumbers = confirm("Would you like to use numbers in your password?");
  var hasSymbols = confirm("Would you like to use symbols in your password?");

  //array that stores choices//
  var answers = []

  //when user chooses to include certain characters for password they will be stored in the empty answers array//
  if (hasUpperCase) {
    answers = answers.concat(upperCase)
  }

  if (hasLowerCase) {
    answers = answers.concat(lowerCase)
  }

  if (hasNumbers) {
    answers = answers.concat(numbers)
  }

  if (hasSymbols) {
    answers = answers.concat(symbols)
  }

  //if the user doesn't select any character types they will be asked to select at least one.//
  if (answers.length === 0) {
    alert("you must select at least one character type. Please try again.")
    return "";
  }

  //a for loop that will run the length of the password the user has chosen//
  var generatedPassword = "";
  for (let i = 0; i < characterLength; ++i) {

    //randomizes characters//
    var randomIndex = Math.floor(Math.random() * answers.length);
    generatedPassword += answers[randomIndex];
  }

  //returns the randomly generated password//
  return generatedPassword;

}

//calls the generate password function to generate random password based on user choice and password will be displayed in the text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//when this button is clicked the password is generated//
generateBtn.addEventListener("click", writePassword);



