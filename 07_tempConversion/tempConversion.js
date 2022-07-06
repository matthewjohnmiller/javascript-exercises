const ftoc = function(degF) {
  let degC = ((degF - 32) * (5 / 9));
  return parseFloat(degC.toFixed(1));
};

const ctof = function(degC) {
  let degF = ((degC * (9 / 5)) + 32);
  return parseFloat(degF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
