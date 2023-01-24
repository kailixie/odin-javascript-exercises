const leapYears = function(year) {

// divisible by four
// not divisible by 100
// divisible by 400

    if (year%4 === 0 && year%100 !== 0 || year%400 === 0) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
