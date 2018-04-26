const express = require('express');
const DB = require('../services/db');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const list = await DB('calculations')
      .select('vehicle_weight', 'co2_value', 'co2_ref_value', 'deviation', 'created_at as request_time')
      .orderBy('created_at', 'asc');

    return res.json(list);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
