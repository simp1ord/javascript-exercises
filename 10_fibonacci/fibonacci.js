/* Function that adds 2 numbers to equal their sum,
then adds the sum to the 2nd of the 2 previous numbers
up until the amount of numbers added equals the number
input*/




const fibonacci = function(number) {
    if (number < 0) {
        return("OOPS");
    }else{
        let fibNum = 1;
        let fibSum = [1];  
          for (let i = 0; i <= (number-2); i++) {
            fibSum.push(fibNum);
            fibNum += fibSum[i];
          }
        const lastValue = fibSum.pop();
        return(lastValue);
    }
};

// Do not edit below this line
module.exports = fibonacci;
