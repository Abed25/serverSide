const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Simple route
app.get("/", (req, res) => {
  res.send("Hello World! This is your Express app.");
});

app.get("/abed", (req, res) => {
  res.send("Am the author of this engine.");
});

// Start the server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
