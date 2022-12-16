const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const educationSchema = new mongoose.Schema({
    SchoolUniversity: { type: String, required: true },
    Degree: { type: String, required: true },
    Grade: { type: String, required: true },
    PassingOfYear: { type: String, required: true }
});

const conn = mongoose.createConnection('mongodb+srv://ngocdiemxt2001:138200113@cluster0.rk8c2nn.mongodb.net/test?retryWrites=true&w=majority');
autoIncrement.initialize(conn);


educationSchema.plugin(autoIncrement.plugin, {
    model: "Education",
    field: "EducationID"
});

const Education = mongoose.model("Education", educationSchema);

module.exports = {Education}