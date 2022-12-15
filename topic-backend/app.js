var express = require("express"),
    mongoose = require("mongoose"),
    autoIncrement = require("mongoose-auto-increment"),
    Joi = require("joi"),
    app = express();
jwt = require("jsonwebtoken");
require('dotenv').config()


//connecting to mongodb
let mongoURI = process.env.DATABASEURL;
//seting up jwt token
let jwtKey = process.env.JWTKEY;


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});


mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose
    .connect(mongoURI)
    .then(() => console.log("db connection successful"))
    .catch(err => console.log(err));

// Create mongo connection
const conn = mongoose.createConnection(mongoURI);
autoIncrement.initialize(conn);
// app.use(bodyParser.urlencoded({ extended: true }));

//for request body
app.use(express.json());
//////////////////////////////////
//////////////////Employee
var employeeSchema = new mongoose.Schema({
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
employeeSchema.plugin(autoIncrement.plugin, {
    model: "Employee",
    field: "EmployeeID"
});

var Employee = mongoose.model("Employee", employeeSchema);

const EmployeeValidation = Joi.object().keys({
    RoleID: Joi.optional(),
    PositionID: Joi.optional(),
    DepartmentID: Joi.optional(),
    SalaryID: Joi.optional(),
    FirstName: Joi.string()
        .max(200)
        .required(),
    MiddleName: Joi.string()
        .max(200)
        .required(),
    LastName: Joi.string()
        .max(200)
        .required(),
    Email: Joi.string()
        .max(200)
        .required(),
    Password: Joi.string()
        .max(100)
        .required(),
    Gender: Joi.string()
        .max(100)
        .required(),
    DOB: Joi.date().required(),
    DateOfJoining: Joi.date().required(),
    TerminateDate: Joi.date().optional(),
    Deleted: Joi.optional(),
    Photo: Joi.optional(),
    ContactNo: Joi.string()
        .max(20)
        .required(),
    EmployeeCode: Joi.string()
        .max(100)
        .required(),
    Account: Joi.number()
        .max(3)
        .required()
});
const EmployeeValidationUpdate = Joi.object().keys({
    RoleID: Joi.optional(),
    PositionID: Joi.optional(),
    DepartmentID: Joi.optional(),
    SalaryID: Joi.optional(),
    FirstName: Joi.string()
        .max(200)
        .required(),
    MiddleName: Joi.string()
        .max(200)
        .required(),
    LastName: Joi.string()
        .max(200)
        .required(),
    Email: Joi.string()
        .max(200)
        .required(),
    Gender: Joi.string()
        .max(100)
        .required(),
    DOB: Joi.date().required(),
    DateOfJoining: Joi.date().required(),
    TerminateDate: Joi.date().optional(),
    Deleted: Joi.optional(),
    Photo: Joi.optional(),
    ContactNo: Joi.string()
        .max(20)
        .required(),
    EmployeeCode: Joi.string()
        .max(100)
        .required(),
    Account: Joi.number()
        .max(3)
        .required()
});

const EmployeePersonalInfoValidation = Joi.object().keys({
    BloodGroup: Joi.string()
        .max(10)
        .required(),
    DOB: Joi.date().required(),

    ContactNo: Joi.string()
        .max(20)
        .required(),
    Email: Joi.string()
        .max(200)
        .required(),
    EmergencyContactNo: Joi.string()
        .max(20)
        .required(),
    Gender: Joi.string()
        .max(100)
        .required(),
    Hobbies: Joi.string()
        .max(1000)
        .required(),
    PANcardNo: Joi.string()
        .max(50)
        .required(),
    PermanetAddress: Joi.string()
        .max(200)
        .required(),
    PresentAddress: Joi.string()
        .max(200)
        .required()
});

//Salary
//salary

var salarySchema = new mongoose.Schema({
    BasicSalary: { type: String, required: true },
    BankName: { type: String, required: true },
    AccountNo: { type: String, required: true },
    AccountHolderName: { type: String, required: true },
    IFSCcode: { type: String, required: true },
    TaxDeduction: { type: String, required: true }
});
salarySchema.plugin(autoIncrement.plugin, {
    model: "Salary",
    field: "SalaryID"
});

var Salary = mongoose.model("Salary", salarySchema);

const SalaryValidation = Joi.object().keys({
    BasicSalary: Joi.string()
        .max(20)
        .required(),
    BankName: Joi.string()
        .max(200)
        .required(),
    AccountNo: Joi.string()
        .max(200)
        .required(),
    AccountHolderName: Joi.string()
        .max(200)
        .required(),
    IFSCcode: Joi.string()
        .max(200)
        .required(),
    TaxDeduction: Joi.string()
        .max(100)
        .required()
});

////////////education

var educationSchema = new mongoose.Schema({
    SchoolUniversity: { type: String, required: true },
    Degree: { type: String, required: true },
    Grade: { type: String, required: true },
    PassingOfYear: { type: String, required: true }
});
educationSchema.plugin(autoIncrement.plugin, {
    model: "Education",
    field: "EducationID"
});

var Education = mongoose.model("Education", educationSchema);

const EducationValidation = Joi.object().keys({
    SchoolUniversity: Joi.string()
        .max(200)
        .required(),
    Degree: Joi.string()
        .max(200)
        .required(),
    Grade: Joi.string()
        .max(50)
        .required(),
    PassingOfYear: Joi.string()
        .max(10)
        .required()
});

//////////////////////////////
/////////////////familyInfo
var familyInfoSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Relationship: { type: String, required: true },
    DOB: { type: Date, required: true },
    Occupation: { type: String, required: true }
});
familyInfoSchema.plugin(autoIncrement.plugin, {
    model: "FamilyInfo",
    field: "FamilyInfoID"
});

var FamilyInfo = mongoose.model("FamilyInfo", familyInfoSchema);

const FamilyInfoValidation = Joi.object().keys({
    Name: Joi.string()
        .max(200)
        .required(),
    Relationship: Joi.string()
        .max(200)
        .required(),
    DOB: Joi.date().required(),
    Occupation: Joi.string()
        .max(100)
        .required()
});
/////////////////////
////////////WorkExperience workExperience
var workExperienceSchema = new mongoose.Schema({
    CompanyName: { type: String, required: true },
    Designation: { type: String, required: true },
    FromDate: { type: Date, required: true },
    ToDate: { type: Date, required: true }
});
workExperienceSchema.plugin(autoIncrement.plugin, {
    model: "WorkExperience",
    field: "WorkExperienceID"
});

var WorkExperience = mongoose.model("WorkExperience", workExperienceSchema);

const WorkExperienceValidation = Joi.object().keys({
    CompanyName: Joi.string()
        .max(200)
        .required(),
    Designation: Joi.string()
        .max(200)
        .required(),
    FromDate: Joi.date().required(),
    ToDate: Joi.date().required()
});
/////////////////////
////////////LeaveApplication leaveApplication leave-application-emp