const Joi = require('joi');
const ProjectValidation = Joi.object().keys({
  _id: Joi.optional(),
  ID: Joi.optional(),
  CreatedBy: Joi.optional(),
  CreatedDate: Joi.optional(),
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
  Status: Joi.number()
      .max(10)
      .required()
});
module.exports = {
  ProjectValidation
};
