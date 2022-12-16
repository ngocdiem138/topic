const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const countrySchema = new mongoose.Schema({
    CountryName: { type: String, required: true },
    states: [{ type: mongoose.Schema.Types.ObjectId, ref: "State" }]
});


const conn = mongoose.createConnection('mongodb+srv://ngocdiemxt2001:138200113@cluster0.rk8c2nn.mongodb.net/test?retryWrites=true&w=majority');
autoIncrement.initialize(conn);


countrySchema.plugin(autoIncrement.plugin, {
    model: "Country",
    field: "CountryID"
});



const Country = mongoose.model("Country", countrySchema);

module.exports = {Country}