const Joi = require("joi");
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
    DateOfJoining: Joi.date().optional(),
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
    DateOfJoining: Joi.date().optional(),
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
 module.exports = {
     EmployeeValidationUpdate,
     EmployeePersonalInfoValidation,
     EmployeeValidation
 }