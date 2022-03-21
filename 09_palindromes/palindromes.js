const palindromes = function (palindromeStatement) {
  let lowercase = palindromeStatement.toLowerCase();
  const noSpecialCharacter = lowercase.replace(/[!,.\s]/g,''); 
  const palindromeArray = noSpecialCharacter.trim().split(" ");
  let passedString = palindromeArray.toString();
  let arrayCharacter = [... passedString];
  let reverse = arrayCharacter.reverse().join('');
      if(reverse == noSpecialCharacter){
        return(true);
      }else{
        return(false);
      } 
}



// Do not edit below this line
module.exports = palindromes;
