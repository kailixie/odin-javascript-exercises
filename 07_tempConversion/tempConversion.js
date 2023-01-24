const convertToCelsius = function(temp) {
  temp -= 32
  temp *= (5/9)

  if (Number.isSafeInteger(temp) === true) {
    return temp;
  } else {
    return Number(temp.toFixed(1));
  }
};

const convertToFahrenheit = function(temp) {
  temp *= (9/5);
  temp += 32;

  if (Number.isSafeInteger(temp) === true) {
    return temp;
  } else {
    return Number(temp.toFixed(1));
  }
}

// .toFixed(1) returns a string with specified decimals
// x °C ≘ (x × 9/5 + 32) °F
//x °F ≘ (x − 32) × (5/9) °C


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
