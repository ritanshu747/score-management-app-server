
const express = require('express');
const bodyParser = require('body-parser');
const playersRoutes = require('./routes/playerRoutes');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use('/players', playersRoutes);

// Error handling middleware for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error handling middleware for other errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
