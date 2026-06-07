const express = require('express');
const router = express.Router();
const cropsData = require('../data/cropsData');

// GET /api/crops/:soilId -> returns crops list for a specific soil
router.get('/:soilId', (req, res) => {
  try {
    const { soilId } = req.params;
    const crops = cropsData[soilId];
    if (crops) {
      res.json(crops);
    } else {
      res.status(404).json({ error: `Soil ID '${soilId}' ke liye koi crops nahi mile.` });
    }
  } catch (error) {
    res.status(500).json({ error: "Crops list fetch karne mein dikkat aayi: " + error.message });
  }
});

// GET /api/crops/:soilId/:cropIndex -> returns single crop details
router.get('/:soilId/:cropIndex', (req, res) => {
  try {
    const { soilId, cropIndex } = req.params;
    const crops = cropsData[soilId];
    if (!crops) {
      return res.status(404).json({ error: `Soil ID '${soilId}' nahi mila.` });
    }

    const idx = parseInt(cropIndex, 10);
    if (isNaN(idx) || idx < 0 || idx >= crops.length) {
      return res.status(404).json({ error: `Crop index '${cropIndex}' invalid hai.` });
    }

    res.json(crops[idx]);
  } catch (error) {
    res.status(500).json({ error: "Crop details fetch karne mein dikkat aayi: " + error.message });
  }
});

module.exports = router;
