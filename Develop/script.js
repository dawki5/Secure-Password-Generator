// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// generates random values from our prompt lists
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var brand = Math.random()
  return Math.floor(min * (1 - brand) + brand * max)
}

function randomlistItem(list) {
  return list[randomInt(list.length)]
}

// 
function generatePassword() {

  //Used to break the forced window prompt
  while (true) {

    var userInput = window.prompt("How long do you want the password to be?")

    // User cancels prompt window
    if (userInput === null) {
      return
    }

    var passwordLength = parseInt(userInput)

    //Prompt window for password length
    if (isNaN(passwordLength)) {
      window.alert("That is not a number")
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Invalid password length")
    } else {
      break
    }

  }


  /* User Prompts*/
  var userNumbers = window.confirm("Would you like to include numbers in your password")
  var userSymbols = window.confirm("Would you like to include symbols in your password")
  var userLowercase = window.confirm("Would you like to include lowercase letters in your password")
  var userUppercase = window.confirm("Would you like to include uppercase letters in your password")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["@", "!", "#", "%", "&", "^", "*", "(", ")", "?",]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
  var uppercaseList = []

  //A list used to store random values from each prompt list
  var finalList = []

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }
  // adds all the prompts to one list
  if (userNumbers === true) {
    finalList.push(numberList)
  }

  if (userSymbols === true) {
    finalList.push(symbolList)
  }

  if (userLowercase === true) {
    finalList.push(lowercaseList)
  }

  if (userUppercase === true) {
    finalList.push(uppercaseList)
  }

  if (finalList.length === 0) {
    finalList.push(numberList)
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomlist = randomlistItem(finalList)
    var randomChar = randomlistItem(randomlist)
    generatedPassword += randomChar
  }

  //Combines all the functions together to generate the password
  return generatedPassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // returns the orignial text if user cancels the prompt window
  if (!password) {
    return
  }

  if (password) {
    passwordText.value = password;
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)