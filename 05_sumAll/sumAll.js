const sumAll = function(num1, num2) {
    
    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0 || Array.isArray(num1) || Array.isArray(num2) || !Number.isFinite(num1) || !Number.isFinite(num2)) {
        return 'ERROR';
    } else {    
        let outputSum = 0;
        if (num1 > num2) {
            let temp = num2;
            num2 = num1;
            num1 = temp;
        }
        for (let i = num1; i <= num2; i++) {
            outputSum = outputSum + i;
        }
        return outputSum;
    }


};


//Debug script
//sumAll(4,7);
//22

// Do not edit below this line
module.exports = sumAll;
