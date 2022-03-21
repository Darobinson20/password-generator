// Assignment code here

 //need to prompt pw criteria
//make sure the length is correct
//ask for lowercase, upper case, special characters
//Generate password
//make sure password is displayed in box

var characterLength = 8;
var choice = [];

var specialchac = ["!","@","#","$","%","^","&","*","/",")","-","_","("];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["1","2","3","4","5","6","7","8","9","0"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var correct = getPrompts();
  var passwordText = document.querySelector("#password");
  
  if(correct) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;

}

function generatePassword() {
  
      var password = "";
      for(var i = 0; i < characterLength; i++) { 
      var randomIndex = Math.floor(Math.random() * choice.length);
      password = password + choice[randomIndex];
  }
  return password;
}


function getPrompts(){
  choice = [];
  
  characterLength = window.prompt("How long would you like the password to be? (8-128 characters).")


if (confirm("Would you like to use special characters?")) {
    choice = choice + specialchac;
}

if (confirm("Would you like to use lowercase letters?")) {
    choice = choice + lowercase;
}
if (confirm("Would you like to use uppercase letters?")) {
    choice = choice + uppercase;
}
if (confirm("Would you like to use numbers?")) {
    choice = choice + number;
}

return true;
}
};

