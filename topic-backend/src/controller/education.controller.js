const { Project } = require('../model/Project');
const Joi = require('joi');
const { ProjectValidation } = require('../middleware/ProjectValidation');
const { Education } = require('../model/Education');
const { Student } = require('../model/Student');
const { EducationValidation } = require('../middleware/EducationValidation');
jwt = require('jsonwebtoken');
let jwtKey = 'set_your_jwt_key';

const findOneByUserId = async (req, res) => {
  const Header = req.headers['authorization'];
  if (typeof Header !== 'undefined') {
    jwt.verify(Header, jwtKey, (err, authData) => {
      const id = authData._id;
      Student.findById(id)
          .exec(function (err, emp) {
            if (err) {
              console.log(err);
              res.send('err');
            } else {
              res.send(emp.education);
            }
          });
    });
  }
};

const findById = async (req, res) => {
  Student.findById(req.params.id)
      .exec(function (err, student) {
        res.send([student.education]);
      });
};

const updateEducation = async (req, res) => {
  Joi.validate(req.body, EducationValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      let newEducation;
      newEducation = {
        SchoolUniversity: req.body.SchoolUniversity,
        Degree: req.body.Degree,
        Grade: req.body.Grade,
        PassingOfYear: req.body.PassingOfYear
      };
      Education.findByIdAndUpdate(req.params.id, newEducation, function (
          err,
          education
      ) {
        if (err) {
          res.send('error');
        } else {
          res.send(newEducation);
        }
      });
    }
    console.log('put');
    console.log(req.body);
  });
};

module.exports = {
  findOneByUserId,
  findById,
  updateEducation
};
