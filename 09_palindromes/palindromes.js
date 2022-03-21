const palindromes = function (palindromeStatement) {
  let lowercase = palindromeStatement.toLowerCase();
  const noSpecialCharacter = lowercase.replace(/[!,.\s]/g,''); 
  console.log(noSpecialCharacter);
    const palindromeArray = noSpecialCharacter.trim().split(" ");
    console.log(palindromeArray);
    if(palindromeArray.length === 1){
      let passedString = palindromeArray.toString();
      let arrayCharacter = [... passedString];
      let reverse = arrayCharacter.reverse().join('');
      if(reverse == noSpecialCharacter){
        return(true);
      }else{
        return(false);
      } 
    }else{
      
}
}


// Do not edit below this line
module.exports = palindromes;
