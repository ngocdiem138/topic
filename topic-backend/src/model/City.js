const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const citySchema = new mongoose.Schema({
    CityName: { type: String, required: true },
    state: [{ type: mongoose.Schema.Types.ObjectId, ref: "State" }]
});

const conn = mongoose.createConnection('mongodb+srv://ngocdiemxt2001:138200113@cluster0.rk8c2nn.mongodb.net/test?retryWrites=true&w=majority');
autoIncrement.initialize(conn);


citySchema.plugin(autoIncrement.plugin, {
    model: "City",
    field: "CityID"
});
const City = mongoose.model("City", citySchema);

module.exports = {City}