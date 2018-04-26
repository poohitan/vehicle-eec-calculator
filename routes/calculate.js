const express = require('express');
const DB = require('../services/db');

const router = express.Router();
const EnergyEfficiencyClass = require('../services/energy-efficiency-class');

router.post('/', async (req, res, next) => {
  const { vehicleWeight, co2Value } = req.body;

  try {
    const co2RefValue = EnergyEfficiencyClass.calculateCo2RefValue(vehicleWeight);
    const deviation = EnergyEfficiencyClass.calculateDeviation(co2Value, co2RefValue);

    await DB('calculations').insert({
      vehicle_weight: vehicleWeight,
      co2_value: co2Value,
      co2_ref_value: co2RefValue,
      deviation,
    });

    return res.json({ co2RefValue, deviation });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
