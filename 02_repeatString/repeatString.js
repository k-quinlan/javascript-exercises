

const repeatString = function(inputString, repNumber) {
    if (repNumber<0) {
        return "ERROR";
    } else {
        let outputString = "";
            for (let i=0; i<repNumber; i++) {
                outputString = outputString.concat(inputString);
            }
        return outputString;
    }
}

repeatString("Hey",1);

// Do not edit below this line
module.exports = repeatString;
