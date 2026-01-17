const convertToCelsius = function(temperature) {
  const toCelcius = (temperature - 32) * 5/9;
  return Number(toCelcius.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  const toFahrenheit = (9/5 * temperature) + 32;
  return Number(toFahrenheit.toFixed(1));    
};
console.log(convertToFahrenheit(100));
console.log(convertToCelsius(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
