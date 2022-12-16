const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const workExperienceSchema = new mongoose.Schema({
    CompanyName: { type: String, required: true },
    Designation: { type: String, required: true },
    FromDate: { type: Date, required: true },
    ToDate: { type: Date, required: true }
});

const conn = mongoose.createConnection('mongodb+srv://ngocdiemxt2001:138200113@cluster0.rk8c2nn.mongodb.net/test?retryWrites=true&w=majority');
autoIncrement.initialize(conn);

workExperienceSchema.plugin(autoIncrement.plugin, {
    model: "WorkExperience",
    field: "WorkExperienceID"
});

const WorkExperience = mongoose.model("WorkExperience", workExperienceSchema);

module.exports = {WorkExperience}