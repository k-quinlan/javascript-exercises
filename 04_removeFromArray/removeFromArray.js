const removeFromArray = function(inputArray, ...toRemove) {
    let outputArray = inputArray.filter(x => !toRemove.includes(x));
    return outputArray;
};

// Debug script
// removeFromArray([9, 7, "E", 4], "E", 7)

// Do not edit below this line
module.exports = removeFromArray;
