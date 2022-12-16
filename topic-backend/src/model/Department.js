const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const departmentSchema = new mongoose.Schema({
    DepartmentName: { type: String, required: true },
    company: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }]
});

const conn = mongoose.createConnection('mongodb+srv://ngocdiemxt2001:138200113@cluster0.rk8c2nn.mongodb.net/test?retryWrites=true&w=majority');
autoIncrement.initialize(conn);


departmentSchema.plugin(autoIncrement.plugin, {
    model: "Department",
    field: "DepartmentID"
});

const Department = mongoose.model("Department", departmentSchema);

module.exports = {Department}