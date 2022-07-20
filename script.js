// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  var password = '';
  var passLength = window.prompt('Enter any number between 8-128 to determine the length of password');
  if (passLength<8) {
    return;
} if (passLength>128) {
    return;
};
  var useUpper = window.confirm('Use Uppercase?');
  var useLower = window.confirm('Use Lowercase?');
  var useSpecial = window.confirm('Use Special Characters?');
  var useNumber = window.confirm('Use Numbers?');
  var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialChars = ['!',,'#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@',']','^','-','`','{','|','}','~']; 
  var numChars = ['1','2','3','4','5','6','7','8','9','0']; 
  var choices = [];
  // TODO: add code to generate the password here

 if (useUpper === true){
  choices.push(upperChars);
  choices.concat(upperChars);
 } if (useLower === true){
  choices.push(lowerChars);
  choices.concat(lowerChars);
 } if (useSpecial === true){
  choices.push(specialChars);
  choices.concat(specialChars);
 } if (useNumber === true){
  choices.push(numChars);
  choices.concat(numChars);
 };
  console.log(useUpper);
  console.log(choices);

  var password = Math.floor(Math.random()*choices.length);

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
