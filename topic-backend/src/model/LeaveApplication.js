const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const leaveApplicationSchema = new mongoose.Schema({
    Leavetype: {type: String, required: true},
    FromDate: {type: Date, required: true},
    ToDate: {type: Date, required: true},
    Reasonforleave: {type: String, required: true},
    Status: {type: String, required: true},
    employee: [{type: mongoose.Schema.Types.ObjectId, ref: "Employee"}]
});
const conn = mongoose.createConnection('mongodb+srv://ngocdiemxt2001:138200113@cluster0.rk8c2nn.mongodb.net/test?retryWrites=true&w=majority');
autoIncrement.initialize(conn);

leaveApplicationSchema.plugin(autoIncrement.plugin, {
    model: "LeaveApplication",
    field: "LeaveApplicationID"
});

const LeaveApplication = mongoose.model(
    "LeaveApplication",
    leaveApplicationSchema
);


module.exports = {LeaveApplication}