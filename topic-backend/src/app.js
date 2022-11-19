const express = require('express');
const route = require('./route/route.js');
const database = require('./config/database/mongodb');

const mongoose =require('mongoose');
const app = express();


//dababae
const URI = "mongodb+srv://nachiluong:trungmika2001@cluster0.bkxlluj.mongodb.net/?retryWrites=true&w=majority"
const port = 3000;
// database.connect();

// Routes
route(app);
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to DB');
      app.listen(3000, () => {
        console.log(`App listening at http://localhost:${port}`);
      });
    })
    .catch((err) => {
      console.log('err', err);
    });
