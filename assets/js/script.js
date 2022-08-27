// 1. Start Appication
var generateBtn = document.querySelector("#generate");

// 2. List of different variables
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "~", "$", "%", "^", "&", "*", "_", "-", "+", "=", "[", "]", "{", "}", "|", "\", ", ", ", "<", ">", "?", "/"];


// Created a series of prompts to store the user's input with assigned variables
function generatePassword() {
  var genPwd = "";
  var pwdOptions = [];

  var length = prompt(
    "How long do you want your password to be? The numbers must be 8-124.");

  if (length < 8 || length > 124) {
    return alert("Your password isn't the right length")
  }

  var hasLowerCase = confirm(
    "Do you want lowercase letters in your password?");

  var hasUpperCase = confirm(
    "Do you want uppercase letters in your password?");

  var hasNumbers = confirm(
    "Do you want numbers in your password?");

  var hasSymbols = confirm(
    "Do you want symbols in your password?");

  // This is to concatenate a desired characters for user's preferred input
  if (hasLowerCase === true) {
    pwdOptions = pwdOptions.concat(lowercase);
  }
  if (hasUpperCase === true) {
    pwdOptions = pwdOptions.concat(uppercase);
  };

  if (hasSymbols === true) {
    pwdOptions = pwdOptions.concat(symbols);
  };

  if (hasNumbers === true) {
    pwdOptions = pwdOptions.concat(numbers);
  };
  console.log(pwdOptions);

  if (!hasLowerCase && !hasUpperCase && !hasSymbols && !hasNumbers) {
    return alert("You need to choose at least one character set")
  }

  // Use for loop to concat random number for whatever user wants their password length to be
  for (var i = 0; i < length; i++) {
    var randomNum = Math.floor(Math.random() * pwdOptions.length);
    genPwd = genPwd.concat(pwdOptions[randomNum]);
  }
  console.log(genPwd);

  return genPwd;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // Add event listener to generate button
};
generateBtn.addEventListener("click", writePassword);