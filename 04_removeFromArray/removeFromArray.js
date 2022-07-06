const removeFromArray = function(myArray) {
    
    const newArray = myArray;
    
    for (let i = 1; i < arguments.length; i++) {
        const index = newArray.indexOf(arguments[i]);
        if (index > -1) {
            newArray.splice(index, 1);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
