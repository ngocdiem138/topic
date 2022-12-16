const Joi = require('joi');
const RoleValidation = Joi.object().keys({
  RoleName: Joi.string()
      .max(200)
      .required()
});
module.exports = {
  RoleValidation
};
