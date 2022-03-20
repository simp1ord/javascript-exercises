const reverseString = function(string) {
    let splitString = string.split("");
    let reverse = splitString.reverse();
    let putTogether = reverse.join("");
    return (putTogether);
};

// Do not edit below this line
module.exports = reverseString;
