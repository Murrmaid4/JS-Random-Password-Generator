var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '<', ':', '>', '}'];

var userChar= [];

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button


// Write password to the #password input
function writePassword() { // this function makes a "password" using the generate password function that is not defined just yet 
  var password = generatePassword();
  // this variable selects the function to generate the password
  var passwordText = document.querySelector("#password");
  //this one hooks that function to the box displaying that password 
  passwordText.value = password;
  //value is reassigned to be password which is that function, generate password
}
// Math.random();

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var pwLength = prompt("Enter the length of your password");
  // if statement to determine id length is between 8 and 128 


  if (isNaN(parseInt(pwLength))) {
    alert("Please enter valid number between 8 and 128");
    return "Please try again"

  } else if (pwLength > 128 || pwLength < 8) {
    alert("Password length must be between 8 and 128 characters");
    return "Please try again";
  }  else{

  var Caps = confirm("Do you want your password to include Uppercase Letters?");
  var hasLower = confirm(" Or lowercase letters?");
  var numeros = confirm("how about numbers?");
  var especial = confirm("and lastly, any special characters?");

  if (Caps) {
   userChar = userChar.concat(upper);
  //  prompt whether uppercase is needed, if so then add to final password

  }

  if (hasLower) {
    userChar = userChar.concat(lower);
  //  user prompted if password needs lowercase
// if lower case add to final password
  }

  if (numeros) {
    userChar = userChar.concat(numeric);
  }

  if (especial) { 
   userChar = userChar.concat(specialChar);
  }
}
  
for( i = 0; i < pwLength; i++){

  var index = Math.floor(Math.random() * userChar.length)
   var userFinal = userChar[index];
  userChar.push(userFinal);
 return userFinal
}

};

