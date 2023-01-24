const reverseString = function(text) {
    arr = text.split("");
    reverseArr = arr.reverse();
    newString = reverseArr.join("");
    return newString
};

// Do not edit below this line
module.exports = reverseString;
