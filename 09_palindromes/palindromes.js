const palindromes = function (palindromeStatement) {
    let lowercase = palindromeStatement.toLowerCase();
    const palindromeArray = lowercase.trim().split(" ");
    console.log(palindromeArray);
    if(palindromeArray.length === 0){
        
    }else{
      let passedString = palindromeArray.toString();
      let arrayCharacter = [... passedString];
      let punctuation = arrayCharacter.pop()
      let reverse = arrayCharacter.reverse().join('');
      if((reverse + punctuation) == lowercase){
        return(true);
      }else{
        return(false);
      }
}
}

// Do not edit below this line
module.exports = palindromes;
