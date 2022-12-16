const express = require('express')
const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')
const app = express();

const LoginRoute = require('./src/route/LoginRoute')
const RoleRoute = require('./src/route/RoleRoute')
const UserRoute = require('./src/route/UserRoute')

jwt = require('jsonwebtoken');
require('dotenv').config();

//connecting to mongodb
// let mongoURI = process.env.DATABASEURL;
let mongoURI ='mongodb+srv://ngocdiemxt2001:138200113@cluster0.rk8c2nn.mongodb.net/test?retryWrites=true&w=majority';
//setting up jwt token
let jwtKey = process.env.JWTKEY;

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose
    .connect(mongoURI)
    .then(() => console.log('db connection successful'))
    .catch(err => console.log(err));

// Create mongo connection
const conn = mongoose.createConnection(mongoURI);
autoIncrement.initialize(conn);


// app.use(bodyParser.urlencoded({ extended: true }));

//for request body
app.use(express.json());

app.use("/", UserRoute);
app.use("/", LoginRoute);
app.use("/", RoleRoute);

const port = 4000;
if (port) {
    app.listen(port, process.env.IP, () => {
        console.log('started');
    });
} else {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}
