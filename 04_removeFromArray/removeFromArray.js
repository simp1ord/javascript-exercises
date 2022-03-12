
const removeFromArray = function(...args) {
    const array = args[0];
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)){
            newArray.push(item);
        }
    });
}

//removes multiple values
//ignores non present values
//ignores non present but still works
//can remove all values
//works with strings
//only removes same type
 

// Do not edit below this line
module.exports = removeFromArray;
