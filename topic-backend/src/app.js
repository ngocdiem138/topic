const express = require('express');
const route = require('./route/route.js');
const database = require('./config/database/mongodb');
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
const db = require("./app/model/index");
const Role = db.role;

//database
const URI = "mongodb+srv://nachiluong:trungmika2001@cluster0.bkxlluj.mongodb.net/?retryWrites=true&w=majority"
const port = 3000;
// database.connect();

const corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// Routes
route(app);
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to DB');
        app.listen(3000, () => {
            console.log(`App listening at http://localhost:${port}`);
        });
        initial();
    })
    .catch((err) => {
        console.log('err', err);
    });
function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "student"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'student' to roles collection");
            });
            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'admin' to roles collection");
            });
            new Role({
                name: "teacher"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'teacher' to roles collection");
            });
            new Role({
                name: "manager"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'manager' to roles collection");
            });
        }
    });
}