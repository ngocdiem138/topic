const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const projectSchema = new mongoose.Schema({
    CreatedBy: { type: String },
    CreatedDate: { type: Date, default: Date.now },
    Deleted: { type: Boolean },
    EmpFullName: { type: String },
    EstimatedCost: { type: Number },
    EstimatedTime: { type: Number },
    ModifiedBy: { type: String },
    ModifiedDate: { type: Date },
    ProjectDesc: { type: String },
    ProjectTitle: { type: String, required: true },
    ProjectURL: { type: String },
    Remark: { type: String },
    ResourceID: { type: Number },
    Status: { type: Number, required: true },
    /////////////****************** */
    // PortalName: { type: String },
    // Portals: 2
    /////////////****************** */
    portals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Portal" }]
});

const conn = mongoose.createConnection('mongodb+srv://ngocdiemxt2001:138200113@cluster0.rk8c2nn.mongodb.net/test?retryWrites=true&w=majority');
autoIncrement.initialize(conn);

projectSchema.plugin(autoIncrement.plugin, {
    model: "Project",
    field: "ID"
});

const Project = mongoose.model("Project", projectSchema);

module.exports = {Project}