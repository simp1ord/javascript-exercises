const sumAll = function(int1, int2) {
  if(int1 < 0 || int2 < 0){
      return('ERROR');
  } else if(typeof int1 === 'string' || typeof int2 === 'string'){
      return('ERROR');
  } else if(Array.isArray(int1) || Array.isArray(int2)){
      return('ERROR');
  } else if(int1 > int2){
    let i = int2;
      while(i <= int1){
        int2 += i;
        i++;
      }
    finalSum = int2 - (i-int1);
    return(finalSum);
  }else {
    let i = int1;
      while(i <= int2){
        int1 += i;
        i++;
      }
    finalSum = int1 - (i-int2);
    return(finalSum);
  }
}
// Do not edit below this line
module.exports = sumAll;
