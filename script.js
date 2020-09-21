// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  var numbers = '0123456789'.split('')
  var specialChars = '!@#$$%^&*()_+='.split('')
  var choosenChars = []
  
  var chooseLower= confirm('Do You Want Lower Case Letters?')
  var chooseUpper= confirm('Do You Want Upper Case Letters?')
  var chooseNumber= confirm('Do You Want Numbers?')
  var chooseSpecial= confirm('Do You Want Special Characters?')
  var chooseLength= prompt('How Long Do You Want Your Password? 8 to 128 Characters')
  if(chooseLower){
    for (let i = 0; i < lowerCaseLetters.length; i++){
    choosenChars.push(lowerCaseLetters[i])  
   }
   

  }
  
  if(chooseUpper){
    for (let i = 0; i < upperCaseLetters.length; i++){
    choosenChars.push(upperCaseLetters[i])  
   }
   

  }
  
  if(chooseNumber){
    for (let i = 0; i < numbers.length; i++){
    choosenChars.push(numbers[i])  
   }
   

  }
  
  if(chooseSpecial){
    for (let i = 0; i < specialChars.length; i++){
    choosenChars.push(specialChars[i])  
   }
   

  }
  var password=''
  chooseLength=parseInt(chooseLength)
  for (let i = 0; i <chooseLength; i++) {
    
    var randomIndex=Math.floor(Math.random()*choosenChars.length) 
    password+= choosenChars[randomIndex]

  }
return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
