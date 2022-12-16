const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const salarySchema = new mongoose.Schema({
    BasicSalary: { type: String, required: true },
    BankName: { type: String, required: true },
    AccountNo: { type: String, required: true },
    AccountHolderName: { type: String, required: true },
    IFSCcode: { type: String, required: true },
    TaxDeduction: { type: String, required: true }
});
const conn = mongoose.createConnection('mongodb+srv://ngocdiemxt2001:138200113@cluster0.rk8c2nn.mongodb.net/test?retryWrites=true&w=majority');
autoIncrement.initialize(conn);

salarySchema.plugin(autoIncrement.plugin, {
    model: "Salary",
    field: "SalaryID"
});

const Salary = mongoose.model("Salary", salarySchema);


module.exports = {Salary}