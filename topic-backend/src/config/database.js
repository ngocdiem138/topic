const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const connect = (mongoURI) =>{
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose
        .connect(mongoURI)
        .then(() => console.log('db connection successful'))
        .catch(err => console.log(err));
}
const initAutoImc = (mongoURI) =>{
    // const conn = mongoose.createConnection(mongoURI);
    // autoIncrement.initialize(conn);
    autoIncrement.initialize(mongoose.connection);

}
module.exports = {
    connect, initAutoImc, autoIncrement
}