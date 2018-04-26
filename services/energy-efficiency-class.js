function calculateCo2RefValue(vehicleWeight) {
  if (typeof vehicleWeight !== 'number' || vehicleWeight <= 0) {
    throw Error('Vehicle weight must be a valid positive number');
  }

  return 36.59079 + (0.08987 * vehicleWeight);
}

function calculateDeviation(co2Value, co2RefValue) {
  if (typeof co2Value !== 'number' || co2Value <= 0) {
    throw Error('CO2 value must be a valid positive number');
  }

  return (Math.abs(co2Value - co2RefValue) / co2RefValue) * 100;
}

module.exports = { calculateCo2RefValue, calculateDeviation };
