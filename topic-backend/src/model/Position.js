const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const positionSchema = new mongoose.Schema({
    PositionName: { type: String, required: true },
    company: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }]
});
positionSchema.plugin(autoIncrement.plugin, {
    model: "Position",
    field: "PositionID"
});

const Position = mongoose.model("Position", positionSchema);