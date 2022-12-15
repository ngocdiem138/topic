const mongoose = require("mongoose")
const autoIncrement = require("mongoose-auto-increment")


const employeeSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    MiddleName: { type: String, required: true },
    LastName: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Gender: { type: String, required: true },
    DOB: { type: Date, required: true },
    DateOfJoining: { type: Date, required: true },
    TerminateDate: { type: Date },
    Deleted: { type: Boolean },
    Photo: { type: String },
    ContactNo: { type: String, required: true },
    EmployeeCode: { type: String, required: true },
    Account: { type: Number, required: true },
    role: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
    position: [{ type: mongoose.Schema.Types.ObjectId, ref: "Position" }],
    department: [{ type: mongoose.Schema.Types.ObjectId, ref: "Department" }],
    salary: [{ type: mongoose.Schema.Types.ObjectId, ref: "Salary" }],
    education: [{ type: mongoose.Schema.Types.ObjectId, ref: "Education" }],
    familyInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: "FamilyInfo" }],
    workExperience: [
        { type: mongoose.Schema.Types.ObjectId, ref: "WorkExperience" }
    ],
    leaveApplication: [
        { type: mongoose.Schema.Types.ObjectId, ref: "LeaveApplication" }
    ],
    BloodGroup: { type: String },
    EmergencyContactNo: { type: String },
    Hobbies: { type: String },
    PANcardNo: { type: String },
    PermanetAddress: { type: String },
    PresentAddress: { type: String }
});

const conn = mongoose.createConnection('mongodb+srv://ngocdiemxt2001:138200113@cluster0.rk8c2nn.mongodb.net/test?retryWrites=true&w=majority');
autoIncrement.initialize(conn);

employeeSchema.plugin(autoIncrement.plugin, {
    model: "Employee",
    field: "EmployeeID"
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee