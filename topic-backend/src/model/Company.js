const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
var companySchema = new mongoose.Schema({
    CompanyName: { type: String, required: true },
    Address: { type: String, required: true },
    PostalCode: { type: Number, required: true },
    Website: { type: String, required: true },
    Email: { type: String, required: true },
    ContactPerson: { type: String, required: true },
    ContactNo: { type: String, required: true },
    FaxNo: { type: String, required: true },
    PanNo: { type: String, required: true },
    GSTNo: { type: String, required: true },
    CINNo: { type: String, required: true },
    Deleted: { type: Boolean },
    city: [{ type: mongoose.Schema.Types.ObjectId, ref: "City" }]
});
companySchema.plugin(autoIncrement.plugin, {
    model: "Company",
    field: "CompanyID"
});
var Company = mongoose.model("Company", companySchema);