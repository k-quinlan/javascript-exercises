const reverseString = function(inputString) {
    let stringLength = inputString.length;
    let myArray = Array.from(inputString);
    let outputString = "";
    for (let i = 0; i < stringLength; i++) {
        outputString = outputString.concat(myArray.pop());
    }
    return outputString;
};

//reverseString("ABCDE");

// Do not edit below this line
module.exports = reverseString;
