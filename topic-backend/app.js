const express = require('express'),
    mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment'),
    Joi = require('joi'),
    app = express();
jwt = require('jsonwebtoken');
require('dotenv').config();

//connecting to mongodb
let mongoURI = process.env.DATABASEURL;
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

const port = process.env.PORT;
if (port & process.env.IP) {
  app.listen(port, process.env.IP, () => {
    console.log('started');
  });
} else {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}
