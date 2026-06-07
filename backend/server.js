require('dotenv').config();
const express = require('express');
const cors = require('cors');
const soilsRouter = require('./routes/soils');
const cropsRouter = require('./routes/crops');
const chatRouter = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 5001;

// Enable CORS so the React app can communicate with this API
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// API health/status check
app.get('/api', (req, res) => {
  res.json({ message: "Mitti se Fasal API par aapka swagat hai! 🌾" });
});

// Mount Routes
app.use('/api/soils', soilsRouter);
app.use('/api/crops', cropsRouter);
app.use('/api/chat', chatRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}... Hello Indian Farmers! 🌾`);
});
