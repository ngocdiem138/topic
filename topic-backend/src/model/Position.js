const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const positionSchema = new mongoose.Schema({
    PositionName: { type: String, required: true },
    company: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }]
});

const conn = mongoose.createConnection('mongodb+srv://ngocdiemxt2001:138200113@cluster0.rk8c2nn.mongodb.net/test?retryWrites=true&w=majority');
autoIncrement.initialize(conn);

positionSchema.plugin(autoIncrement.plugin, {
    model: "Position",
    field: "PositionID"
});

const Position = mongoose.model("Position", positionSchema);


module.exports = {Position}