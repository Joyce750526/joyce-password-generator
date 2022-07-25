// 1. Start Appication
var generateBtn = document.querySelector("#generate");

// 2. List of different variables
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "~", "$", "%", "^", "&", "*", "_", "-", "+", "=", "[", "]", "{", "}", "|", "\", ", ", ", "<", ">", "?", "/"];



function generatePassword() {
  var length = prompt(
    "How long do you want your password to be? The numbers must be 8-124.");
  
    if (length < 8 || length > 124) {
    return alert("Your password isn't the right length")}
  
    var hasLowerCase = confirm(
    "Do you want lowercase letters in your password?");
  
    var hasUpperCase = confirm(
    "Do you want uppercase letters in your password?");
  
    var hasNumbers = confirm(
    "Do you want numbers in your password?");
  
    var hasSymbols = confirm(
    "Do you want symbols in your password?");
}

// Empty Array
var possibleCharacxters = [];
var uppercaseLetters=[];
var genPwd ="";
var pwdOptions=[];

// Assignment code here
var generateBtn = document.querySelector("#generate");
// 1. Start Appication

// 2. User is presented with prompts to select length of password and
// what types of characters they want in their password.

// 3. We use that data to create a password for them, using arrays of the the different kinds of characters they selected.

// 4. We use a random number generator to select from that array of all the different characters.

// 5. Finally, based on the length they selected at the beginning, we run the random number generator that many times to select characters for their password.

// 6. Then we write that generated password to the main box in our html.



// for (var i = 0; i < 10; i++) {
//   var characters = 1; //generate some random character
//   builtString.length * characters;
// }



// Get references to the #generate element

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
