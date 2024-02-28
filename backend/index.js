const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Enable CORS with default options
app.use(cors());

// Endpoint to handle /test/first
app.get('/test/first', (req, res) => {
  // Generate a fake bearer token (you would typically generate a real one)
  const BearerToken = 'your_generated_bearer_token';

  // Send the bearer token as part of the response body
  res.json({ BearerToken });
});

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
