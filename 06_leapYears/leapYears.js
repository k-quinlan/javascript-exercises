const leapYears = function(inputYear) {
    if (inputYear % 4 != 0) {
        return false;
    } else if (inputYear % 100 === 0 && inputYear % 400 != 0) {
        return false;
    } else {
        return true;
    }
};

leapYears(1996);

/*

Leap years are years divisible by four (like 1984 and 2004). 
Years divisible by 100 are not leap years (such as 1800 and 1900) 
unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years)

*/

// Do not edit below this line
module.exports = leapYears;
