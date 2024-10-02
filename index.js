const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple route
app.get('/', (req, res) => {
  res.send('Hello World! This is your Express app.');
});

// Start the server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
