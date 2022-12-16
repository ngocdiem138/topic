const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const portalSchema = new mongoose.Schema({
    CreatedBy: { type: String },
    CreatedDate: { type: Date, default: Date.now },
    Deleted: { type: Boolean },
    ModifiedBy: { type: String },
    ModifiedDate: { type: Date },
    PortalName: { type: String, required: true },
    Status: { type: Number, required: true }
});

const conn = mongoose.createConnection('mongodb+srv://ngocdiemxt2001:138200113@cluster0.rk8c2nn.mongodb.net/test?retryWrites=true&w=majority');
autoIncrement.initialize(conn);

portalSchema.plugin(autoIncrement.plugin, {
    model: "Portal",
    field: "ID"
});

const Portal = mongoose.model("Portal", portalSchema);

module.exports = {Portal}