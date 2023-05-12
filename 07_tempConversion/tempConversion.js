const convertToCelsius = function(inputTemp) {
  let resultTemp = (inputTemp-32) * (5/9);
  //  return resultTemp.toFixed(1);
  return Math.round(resultTemp*10)/10;
};

const convertToFahrenheit = function(inputTemp) {
  let resultTemp = (inputTemp * (9/5) + 32);
  // return resultTemp.toFixed(1);
  return Math.round(resultTemp*10)/10;
};




// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
