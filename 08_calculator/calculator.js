const add = function(addOne, addTwo) {
	let sum = addOne + addTwo;
  return(sum);
};

const subtract = function(subOne, subTwo) {
	let remainder = subOne - subTwo;
  return(remainder);
};

const sum = function(numbList) {
let sumOfNumbs = 0;
  const array = Array.from(numbList);
  if (array.length < 1) {
    return(sumOfNumbs);
  }else{
    array.forEach(numbers => {
      sumOfNumbs += numbers;
    });
  return(sumOfNumbs);
  }
};

const multiply = function(numberList) {
  const multiplyArray = Array.from(numberList);
  let multible = numberList[0];
    if(multiplyArray.length < 1){
      return(multible);
    } else{
      multiplyArray.forEach(multiply => {
        if (multiply === numberList[0]){
          //skip number
        }else{
          multible *= multiply;
        }
      });
      return(multible);
    }
};

const power = function(powerNumber, power) {
let powerSum = powerNumber
let i = 0;
while(i < power) {
    i === 0 ? i++ : (powerSum *= powerNumber, i++);
}
return(powerSum);
};

const factorial = function(factorial) {
let factorialMultiply = factorial;
  if(factorialMultiply === 0){
    return(1);
  }else {
    for(i = factorial; i >= 1; i--){
      i === factorial ? '' : factorialMultiply *= i;
    }
    return(factorialMultiply);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
