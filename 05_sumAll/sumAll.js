const sumAll = function(integerOne, integerTwo) {
    function checkType(a, b) {
        if (typeof a == "number" && typeof b == "number"){
            return "Y";
        } else {
            return "N";
        }
    } 

    if (checkType(integerOne, integerTwo) == "N") return "ERROR";
    
    if (integerOne < 0 || integerTwo < 0) return "ERROR";
        
    arraySum = [];
    finalSum = 0;

    if (integerOne > integerTwo) {
        difference = integerOne - integerTwo

        for (let i = integerTwo; i <= difference + 1; i++) {
            arraySum.push(i);
            }

    } 
            
    else if (integerTwo > integerOne) {
        difference = integerTwo - integerOne;

        for (let i = integerOne; i <= difference + 1; i++) {
            arraySum.push(i);
            } 
    
    }
            
    for (let i = 0; i < arraySum.length; i++) {
        finalSum += arraySum[i]
    }
    
    return finalSum;

}

// Do not edit below this line
module.exports = sumAll;
