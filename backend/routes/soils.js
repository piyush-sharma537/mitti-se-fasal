const express = require('express');
const router = express.Router();
const soilsData = require('../data/soilsData');

// GET /api/soils -> returns all soil types
router.get('/', (req, res) => {
  try {
    res.json(soilsData);
  } catch (error) {
    res.status(500).json({ error: "Soils data fetch karne mein dikkat aayi: " + error.message });
  }
});

module.exports = router;
