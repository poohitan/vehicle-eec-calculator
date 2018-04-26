const roundTo = require('round-to');

function calculateCo2RefValue(vehicleWeight) {
  if (typeof vehicleWeight !== 'number') {
    throw TypeError('Vehicle weight must be a number');
  }

  if (vehicleWeight <= 0) {
    throw RangeError('Vehicle weight must be greater than zero');
  }

  const co2RefValue = 36.59079 + (0.08987 * vehicleWeight);

  return roundTo(co2RefValue, 3);
}

function calculateDeviation(co2Value, co2RefValue) {
  if (typeof co2Value !== 'number' || typeof co2RefValue !== 'number') {
    throw TypeError('CO2 value and CO2 ref value must be numbers');
  }

  if (co2Value <= 0 || co2RefValue <= 0) {
    throw RangeError('CO2 value and CO2 ref value must be greater than zero');
  }

  const deviation = (Math.abs(co2Value - co2RefValue) / co2RefValue) * 100;

  return roundTo(deviation, 3);
}

module.exports = { calculateCo2RefValue, calculateDeviation };
