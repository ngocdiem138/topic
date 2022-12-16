const mongoose = require("mongoose")
const autoIncrement = require("mongoose-auto-increment")


const studentSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    MiddleName: { type: String, required: true },
    LastName: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Gender: { type: String, required: true },
    DOB: { type: Date, required: true },
    ContactNo: { type: String, required: true },
    StudentCode: { type: String, required: true },
    Account: { type: Number, required: true },
    education: [{ type: mongoose.Schema.Types.ObjectId, ref: "Education" }],
    Hobbies: { type: String },
    PermanetAddress: { type: String },
    PresentAddress: { type: String }
});

const conn = mongoose.createConnection('mongodb+srv://ngocdiemxt2001:138200113@cluster0.rk8c2nn.mongodb.net/test?retryWrites=true&w=majority');
autoIncrement.initialize(conn);

studentSchema.plugin(autoIncrement.plugin, {
    model: "Student",
    field: "StudentID"
});

const Student = mongoose.model("Student", studentSchema);

module.exports = { Student }
