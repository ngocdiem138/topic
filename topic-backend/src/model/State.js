const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const stateSchema = new mongoose.Schema({
    StateName: { type: String, required: true },
    country: [{ type: mongoose.Schema.Types.ObjectId, ref: "Country" }],
    cities: [{ type: mongoose.Schema.Types.ObjectId, ref: "City" }]
});

const conn = mongoose.createConnection('mongodb+srv://ngocdiemxt2001:138200113@cluster0.rk8c2nn.mongodb.net/test?retryWrites=true&w=majority');
autoIncrement.initialize(conn);

stateSchema.plugin(autoIncrement.plugin, {
    model: "State",
    field: "StateID"
});
const State = mongoose.model("State", stateSchema);

module.exports = {State}