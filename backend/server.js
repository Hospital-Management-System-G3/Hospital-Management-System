// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./config/db'); // Import the database pool

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test DB connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
  } else {
    console.log('DB connected at:', res.rows[0].now); // Log connection timestamp
  }
});

// Routes
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.get('/test', (req, res) => {
  res.json({ message: 'Test route is working' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
