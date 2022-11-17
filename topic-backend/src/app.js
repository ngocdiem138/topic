const express = require('express');
const route = require('./route/route');
const database = require('./config/database/mongodb');

const app = express();
const port = 3000;

// Routes
route(app);

// Application
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});