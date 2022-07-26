// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  //final result
  var password = '';
  //length of password
  var passLength = window.prompt('Enter any number between 8-128 to determine the length of password');
  if (passLength<8) {
    return;
} if (passLength>128) {
    return;
};
  // window prompts
  var useUpper = window.confirm('Use Uppercase?');
  var useLower = window.confirm('Use Lowercase?');
  var useSpecial = window.confirm('Use Special Characters?');
  var useNumber = window.confirm('Use Numbers?');
  //character index's
  var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialChars = ['!',,'#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@',']','^','-','`','{','|','}','~']; 
  var numChars = ['1','2','3','4','5','6','7','8','9','0']; 
  //master index
  var choices = [];
 

//user input return values and how it corresponds to the master index
 if (useUpper === true){
  choices.concat(upperChars);
  choices=choices.concat(upperChars);

 } if (useLower === true){
  choices.concat(lowerChars);
  choices=choices.concat(lowerChars);

 } if (useSpecial === true){
  choices.concat(specialChars);
  choices=choices.concat(specialChars);

 } if (useNumber === true){
  choices.concat(numChars);
  choices=choices.concat(numChars);
 };

  
  console.log(choices);

 //loops defining a variable that determines which item to apply to password the same amount of times as the user chose in the first prompt
  for (i=0; i<passLength; i++) {
    var element = Math.floor(Math.random()*choices.length);
    //this returns a value to choose which item in choices index to apply to password
    // add choices[element] to password
    password = password + choices[element];
  };
  console.log(element);
  console.log(password);

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
