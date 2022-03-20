const repeatString = function(string, num) {
if(num < 0){
    return("ERROR");
}else {
    firstString = [];
    for(let i = 0; i < num; i++){
        firstString.push(string);
    } 
let finalString = firstString.join("");
return(finalString);
}
};

// Do not edit below this line
module.exports = repeatString;
//when function takes in hey, and any value of number, repeat the string 'num'
//times and return it outside function as one word w/o spaces