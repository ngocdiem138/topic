const Joi = require('joi');
const StudentValidation = Joi.object().keys({
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
  ContactNo: Joi.string()
      .max(20)
      .required(),
  StudentCode: Joi.string()
      .max(100)
      .required(),
  Account: Joi.number()
      .max(3)
      .required()
});
const StudentValidationUpdate = Joi.object().keys({
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
  ContactNo: Joi.string()
      .max(20)
      .required(),
  StudentCode: Joi.string()
      .max(100)
      .required(),
  Account: Joi.number()
      .max(3)
      .required()
});

const StudentPersonalInfoValidation = Joi.object().keys({
  DOB: Joi.date().required(),
  ContactNo: Joi.string()
      .max(20)
      .required(),
  Email: Joi.string()
      .max(200)
      .required(),
  Gender: Joi.string()
      .max(100)
      .required(),
  Hobbies: Joi.string()
      .max(1000)
      .required(),
  PermanetAddress: Joi.string()
      .max(200)
      .required(),
  PresentAddress: Joi.string()
      .max(200)
      .required()
});
module.exports = {
  StudentValidationUpdate,
  StudentPersonalInfoValidation,
  StudentValidation
};
