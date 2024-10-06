const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const db = require("./utils/database");

//app.use(loggingMiddleware);

// Simple route
app.get("/", (req, res) => {
  res.send("Hello World! This is your Express app.");
});

app.get("/abed", (req, res) => {
  res.send("Am the author of this engine.");
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM sampleData", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
