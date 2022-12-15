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
var leaveApplicationSchema = new mongoose.Schema({
  Leavetype: { type: String, required: true },
  FromDate: { type: Date, required: true },
  ToDate: { type: Date, required: true },
  Reasonforleave: { type: String, required: true },
  Status: { type: String, required: true },
  employee: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }]
});
leaveApplicationSchema.plugin(autoIncrement.plugin, {
  model: "LeaveApplication",
  field: "LeaveApplicationID"
});

var LeaveApplication = mongoose.model(
    "LeaveApplication",
    leaveApplicationSchema
);

const LeaveApplicationValidation = Joi.object().keys({
  Leavetype: Joi.string()
      .max(100)
      .required(),

  FromDate: Joi.date().required(),
  ToDate: Joi.date().required(),
  Reasonforleave: Joi.string()
      .max(100)
      .required(),
  Status: Joi.number()
      .max(1)
      .required()
});
const LeaveApplicationHRValidation = Joi.object().keys({
  Status: Joi.number()
      .max(3)
      .required()
});
//////////////////////////////////
//////////////////Role
var roleSchema = new mongoose.Schema({
  // RoleID: {type:Number,required:true, default: 0 },
  RoleName: { type: String, required: true },
  company: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }]
});
roleSchema.plugin(autoIncrement.plugin, {
  model: "Role",
  field: "RoleID"
});
var Role = mongoose.model("Role", roleSchema);

const RoleValidation = Joi.object().keys({
  RoleName: Joi.string()
      .max(200)
      .required(),
  CompanyID: Joi.required()
});

var positionSchema = new mongoose.Schema({
  PositionName: { type: String, required: true },
  company: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }]
});
positionSchema.plugin(autoIncrement.plugin, {
  model: "Position",
  field: "PositionID"
});

var Position = mongoose.model("Position", positionSchema);

const PositionValidation = Joi.object().keys({
  PositionName: Joi.string()
      .max(200)
      .required(),
  CompanyID: Joi.required()
});

var departmentSchema = new mongoose.Schema({
  DepartmentName: { type: String, required: true },
  company: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }]
});
departmentSchema.plugin(autoIncrement.plugin, {
  model: "Department",
  field: "DepartmentID"
});

var Department = mongoose.model("Department", departmentSchema);

const DepartmentValidation = Joi.object().keys({
  DepartmentName: Joi.string()
      .max(200)
      .required(),
  CompanyID: Joi.required()
});

/////Portal

var portalSchema = new mongoose.Schema({
  CreatedBy: { type: String },
  CreatedDate: { type: Date, default: Date.now },
  Deleted: { type: Boolean },
  ModifiedBy: { type: String },
  ModifiedDate: { type: Date },
  PortalName: { type: String, required: true },
  Status: { type: Number, required: true }
});
portalSchema.plugin(autoIncrement.plugin, {
  model: "Portal",
  field: "ID"
});

var Portal = mongoose.model("Portal", portalSchema);

const PortalValidation = Joi.object().keys({
  _id: Joi.optional(),
  ID: Joi.optional(),
  CreatedBy: Joi.optional(),
  CreatedDate: Joi.optional(),
  Deleted: Joi.optional(),
  ModifiedBy: Joi.optional(),
  ModifiedDate: Joi.optional(),
  PortalName: Joi.string()
      .max(200)
      .required(),
  Status: Joi.number()
      .max(1)
      .required()
});

var projectSchema = new mongoose.Schema({
  CreatedBy: { type: String },
  CreatedDate: { type: Date, default: Date.now },
  Deleted: { type: Boolean },
  EmpFullName: { type: String },
  EstimatedCost: { type: Number },
  EstimatedTime: { type: Number },
  ModifiedBy: { type: String },
  ModifiedDate: { type: Date },
  ProjectDesc: { type: String },
  ProjectTitle: { type: String, required: true },
  ProjectURL: { type: String },
  Remark: { type: String },
  ResourceID: { type: Number },
  Status: { type: Number, required: true },
  /////////////****************** */
  // PortalName: { type: String },
  // Portals: 2
  /////////////****************** */
  portals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Portal" }]
});
projectSchema.plugin(autoIncrement.plugin, {
  model: "Project",
  field: "ID"
});

var Project = mongoose.model("Project", projectSchema);

const ProjectValidation = Joi.object().keys({
  _id: Joi.optional(),
  ID: Joi.optional(),
  CreatedBy: Joi.optional(),
  CreatedDate: Joi.optional(),
  Deleted: Joi.optional(),
  EmpFullName: Joi.string()
      .max(200)
      .optional(),
  EstimatedCost: Joi.optional(),
  EstimatedTime: Joi.optional(),
  ModifiedBy: Joi.optional(),
  ModifiedDate: Joi.optional(),
  ProjectDesc: Joi.string()
      .max(2000)
      .optional(),
  ProjectTitle: Joi.string()
      .max(200)
      .required(),
  ProjectURL: Joi.string()
      .max(1000)
      .optional(),
  Remark: Joi.string()
      .max(2000)
      .optional(),
  ResourceID: Joi.optional(),
  Status: Joi.number()
      .max(10)
      .required(),
  portal: Joi.optional(),
  Portal_ID: Joi.optional()
});

/////////////////////////////////////
//////   HR                      ////
/////////////////////////////////////
var countrySchema = new mongoose.Schema({
  CountryName: { type: String, required: true },
  states: [{ type: mongoose.Schema.Types.ObjectId, ref: "State" }]
});
countrySchema.plugin(autoIncrement.plugin, {
  model: "Country",
  field: "CountryID"
});
var Country = mongoose.model("Country", countrySchema);

const CountryValidation = Joi.object().keys({
  _id: Joi.optional(),
  CountryID: Joi.optional(),
  CountryName: Joi.string()
      .max(200)
      .required()
});

var stateSchema = new mongoose.Schema({
  StateName: { type: String, required: true },
  country: [{ type: mongoose.Schema.Types.ObjectId, ref: "Country" }],
  cities: [{ type: mongoose.Schema.Types.ObjectId, ref: "City" }]
});
stateSchema.plugin(autoIncrement.plugin, {
  model: "State",
  field: "StateID"
});
var State = mongoose.model("State", stateSchema);

const StateValidation = Joi.object().keys({
  _id: Joi.optional(),
  CountryID: Joi.optional(),
  StateName: Joi.string()
      .max(200)
      .required()
});

var citySchema = new mongoose.Schema({
  CityName: { type: String, required: true },
  state: [{ type: mongoose.Schema.Types.ObjectId, ref: "State" }]
});
citySchema.plugin(autoIncrement.plugin, {
  model: "City",
  field: "CityID"
});
var City = mongoose.model("City", citySchema);

const CityValidation = Joi.object().keys({
  _id: Joi.optional(),
  StateID: Joi.optional(),
  CityName: Joi.string()
      .max(200)
      .required()
});

/////////////////////////////////
/////////////company////////////
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
citySchema.plugin(autoIncrement.plugin, {
  model: "Company",
  field: "CompanyID"
});
var Company = mongoose.model("Company", companySchema);

const CompanyValidation = Joi.object().keys({
  _id: Joi.optional(),
  CityID: Joi.optional(),
  CompanyName: Joi.string()
      .max(200)
      .required(),
  Address: Joi.string()
      .max(2000)
      .required(),
  PostalCode: Joi.number()
      .max(999999)
      .required(),
  Website: Joi.string()
      .max(2000)
      .required(),
  Email: Joi.string()
      .max(1000)
      .required(),
  ContactPerson: Joi.string()
      .max(200)
      .required(),
  ContactNo: Joi.string()
      .max(20)
      .required(),
  FaxNo: Joi.string()
      .max(100)
      .required(),
  PanNo: Joi.string()
      .max(200)
      .required(),
  GSTNo: Joi.string()
      .max(200)
      .required(),
  CINNo: Joi.string()
      .max(200)
      .required(),
  Deleted: Joi.optional()
});
