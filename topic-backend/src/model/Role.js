const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const roleSchema = new mongoose.Schema({
    // RoleID: {type:Number,required:true, default: 0 },
    RoleName: { type: String, required: true },
    company: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }]
});
const conn = mongoose.createConnection('mongodb+srv://ngocdiemxt2001:138200113@cluster0.rk8c2nn.mongodb.net/test?retryWrites=true&w=majority');
autoIncrement.initialize(conn);

roleSchema.plugin(autoIncrement.plugin, {
    model: "Role",
    field: "RoleID"
});
const Role = mongoose.model("Role", roleSchema);
module.exports = {Role}