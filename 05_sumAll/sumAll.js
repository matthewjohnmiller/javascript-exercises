const sumAll = function(firstNum, secondNum) {
    let sum = 0;

    if (firstNum < 0 || secondNum < 0 || typeof firstNum != 'number' || typeof secondNum != 'number') {
        return 'ERROR';
    }
    
    let lowNum = Math.min(firstNum, secondNum);
    let highNum = Math.max(firstNum, secondNum);

    for (i = lowNum; i <= highNum; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
